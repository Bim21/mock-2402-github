package com.vti.JobPortal.services;

import com.vti.JobPortal.entity.Language;
import com.vti.JobPortal.repositories.ILanguageRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class LanguageService {
    private final ILanguageRepository languageRepository;

    public LanguageService(ILanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

    public Language createLanguage(Language language) {
        return languageRepository.save(language);
    }

    public Language getLanguageById(Long id) {
        return languageRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Language not found with id: " + id));
    }

    public Language updateLanguage(Long id, Language updatedLanguage) {
        Language language = getLanguageById(id);
        language.setLanguageName(updatedLanguage.getLanguageName());
        language.setLevelLanguage(updatedLanguage.getLevelLanguage());
        return languageRepository.save(language);
    }

    public void deleteLanguage(Long id) {
        Language language = getLanguageById(id);
        languageRepository.delete(language);
    }
}