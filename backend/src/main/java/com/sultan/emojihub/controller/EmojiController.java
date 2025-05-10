package com.sultan.emojihub.controller;

import com.sultan.emojihub.model.Emoji;
import com.sultan.emojihub.service.EmojiService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")  // for React
public class EmojiController {

    private final EmojiService emojiService;

    public EmojiController(EmojiService emojiService) {
        this.emojiService = emojiService;
    }

    // GET /api/emojis
    @GetMapping("/emojis")
    public List<Emoji> getEmojis(@RequestParam(required = false) String search) {
        if (search != null && !search.isEmpty()) {
            return emojiService.searchByName(search);
        }
        return emojiService.getAllEmojis();
    }

    // GET /api/emojis/category/{name}
    @GetMapping("/emojis/category/{category}")
    public List<Emoji> getByCategory(@PathVariable String category) {
        return emojiService.getByCategory(category);
    }

    @GetMapping("/emojis/random")
    public Emoji getRandomEmoji() {
        List<Emoji> all = emojiService.getAllEmojis();
        return all.isEmpty() ? null : all.get(new Random().nextInt(all.size()));
    }

}
