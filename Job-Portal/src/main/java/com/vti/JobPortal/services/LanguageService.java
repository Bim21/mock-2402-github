package com.vti.JobPortal.services;

import com.vti.JobPortal.database.SequenceGeneratorService;
import com.vti.JobPortal.entity.Language;
import com.vti.JobPortal.repositories.ILanguageRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LanguageService {
    private final ILanguageRepository languageRepository;
    private final SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    public LanguageService(ILanguageRepository languageRepository, SequenceGeneratorService sequenceGeneratorService) {
        this.languageRepository = languageRepository;
        this.sequenceGeneratorService = sequenceGeneratorService;
    }

    public Language createLanguage(Language language) {
        long sequence = sequenceGeneratorService.generateSequence("language_sequence");
        language.setId(sequence);
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