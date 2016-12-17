package com.lilit.ws;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController extends BaseController {

    @PostMapping("/login")
    public ResponseEntity login(@AuthenticationPrincipal final UserDetails user) {
        Map<String, Object> response = new HashMap<>();
        response.put("username", user.getUsername());
        response.put("authorities", user.getAuthorities());
        return new ResponseEntity(response, HttpStatus.OK);
    }
}
