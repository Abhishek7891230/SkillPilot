let activeSession = false;

export function activateMockSession() {
  activeSession = true;
}

export function clearMockSession() {
  activeSession = false;
}

export function isSessionActive() {
  return activeSession;
}
