# Audio Files Directory

This directory is where you'll place your French pronunciation MP3 files.

## File Naming Convention

For consistency, please name your audio files to match their corresponding phrases. For example:

- `bonjour-comment-allez-vous.mp3` for "Bonjour, comment allez-vous?"
- `je-m-appelle-john.mp3` for "Je m'appelle John"

## Adding New Audio Files

1. Place your MP3 files in this directory
2. Update the `phrases.ts` file in the `src/data` directory to reference these audio files
3. Ensure the `audioSrc` property for each phrase points to the correct file path

Example:
```typescript
{
  id: '1',
  english: 'Hello, how are you?',
  french: 'Bonjour, comment allez-vous?',
  audioSrc: '/audio/bonjour-comment-allez-vous.mp3',
  category: 'greetings'
}
```

## Notes

- Audio files should be clear, high-quality recordings
- Keep file sizes reasonable (ideally under 100KB per phrase) for better performance
- The website is designed to work with MP3 files, but can be adapted for other audio formats if needed