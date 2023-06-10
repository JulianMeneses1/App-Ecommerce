
package com.back.appecommerce.controllers;

import com.back.appecommerce.services.StorageService;
import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Map;
import lombok.AllArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@AllArgsConstructor
@RequestMapping("/files")
public class StorageController {
    
    private final StorageService storageService; 
    
    private final HttpServletRequest request;
    
    @PostMapping
    public Map<String, String> uploadFile (@RequestParam("file") MultipartFile multipartFile) {
        String path = storageService.store(multipartFile);
        String host = request.getRequestURL().toString().replace(request.getRequestURI(), "");
        String url = ServletUriComponentsBuilder
                .fromHttpUrl(host)
                .path("/files/")
                .path(path)
                .toUriString();
        return Map.of("url",url);
    }
    
    @GetMapping ("{nombreArchivo}")
    public ResponseEntity <Resource> getFile(@PathVariable String nombreArchivo) throws IOException {
        Resource file = storageService.loadAsResource(nombreArchivo);
        String contentType = Files.probeContentType(file.getFile().toPath());
        
        return ResponseEntity
                .ok()
                .header(HttpHeaders.CONTENT_TYPE, contentType)
                .body(file);
    }
}
