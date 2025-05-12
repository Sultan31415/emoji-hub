package com.sultan.emojihub.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
@Service
public class EmojiDescriptionService {

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate = new RestTemplate();
    private final Map<String, String> cache = new ConcurrentHashMap<>();

    public String getDescription(String name, String category) {
        String key = (name + "_" + category).toLowerCase();
        if (cache.containsKey(key)) return cache.get(key);

        String prompt = String.format(
                "In one sentence, describe the mood or emotion of the emoji named \"%s\" (category: %s).",
                name, category
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> part = Map.of("text", prompt);
        Map<String, Object> content = Map.of("parts", List.of(part));
        Map<String, Object> requestBody = Map.of("contents", List.of(content));

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);

        try {
            String fullUrl = apiUrl + "?key=" + apiKey;
            ResponseEntity<Map> response = restTemplate.postForEntity(fullUrl, request, Map.class);

            // Parse the response
            List<Map<String, Object>> candidates = (List<Map<String, Object>>) response.getBody().get("candidates");
            if (candidates != null && !candidates.isEmpty()) {
                Map<String, Object> candidate = candidates.get(0);
                Map<String, Object> contentMap = (Map<String, Object>) candidate.get("content");
                List<Map<String, Object>> parts = (List<Map<String, Object>>) contentMap.get("parts");
                String text = (String) parts.get(0).get("text");

                cache.put(key, text.trim());
                return text.trim();
            }
        } catch (Exception e) {
            System.err.println("Gemini API error: " + e.getMessage());
        }

        return "Description not available.";
    }
}
