package com.sultan.emojihub.service;

import com.sultan.emojihub.model.Emoji;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Service
public class EmojiService {

    private final String BASE_URL = "https://emojihub.yurace.pro/api";

    private final RestTemplate restTemplate = new RestTemplate();

    public List<Emoji> getAllEmojis() {
        try {
            Emoji[] response = restTemplate.getForObject(BASE_URL + "/all", Emoji[].class);
            return Arrays.asList(response);
        } catch (Exception e) {
            System.err.println("Error fetching emojis: " + e.getMessage());
            return List.of();
        }
    }

    public List<Emoji> searchByName(String keyword) {
        return getAllEmojis().stream()
                .filter(e -> e.getName().toLowerCase(Locale.ROOT).contains(keyword.toLowerCase(Locale.ROOT)))
                .collect(Collectors.toList());
    }

    public List<Emoji> getByCategory(String category) {
        try {
            Emoji[] response = restTemplate.getForObject(BASE_URL + "/all/category/" + category, Emoji[].class);
            return Arrays.asList(response);
        } catch (Exception e) {
            System.err.println("Error fetching category: " + e.getMessage());
            return List.of();
        }
    }
}
