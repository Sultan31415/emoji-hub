package com.sultan.emojihub.controller;

import com.sultan.emojihub.service.EmojiDescriptionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/emoji")
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "https://emoji-hub-sigma.vercel.app")
public class EmojiDescriptionController {

    private final EmojiDescriptionService descriptionService;

    public EmojiDescriptionController(EmojiDescriptionService descriptionService) {
        this.descriptionService = descriptionService;
    }

    @GetMapping("/description")
    public ResponseEntity<String> getDescription(
            @RequestParam String name,
            @RequestParam String category) {

        String description = descriptionService.getDescription(name, category);
        return ResponseEntity.ok(description);
    }
}
