class SoundEffects {
  constructor() {
    this.audioContext = null;
  }

  init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playBeep(frequency, type, duration, vol) {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);

    gainNode.gain.setValueAtTime(vol, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  playCorrect() {
    this.init();
    this.playBeep(600, 'sine', 0.1, 0.1);
    setTimeout(() => this.playBeep(800, 'sine', 0.15, 0.1), 100);
  }

  playWrong() {
    this.init();
    this.playBeep(300, 'sawtooth', 0.2, 0.1);
    setTimeout(() => this.playBeep(200, 'sawtooth', 0.25, 0.1), 150);
  }

  playClick() {
    this.init();
    this.playBeep(400, 'sine', 0.05, 0.05);
  }
}

export const sounds = new SoundEffects();
