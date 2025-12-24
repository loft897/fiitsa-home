const rateMap = new Map<string, { count: number; resetAt: number }>();

type RateLimitConfig = {
  windowMs: number;
  max: number;
};

export function rateLimit(key: string, config: RateLimitConfig) {
  const now = Date.now();
  const existing = rateMap.get(key);

  if (!existing || existing.resetAt < now) {
    rateMap.set(key, { count: 1, resetAt: now + config.windowMs });
    return { allowed: true, remaining: config.max - 1 };
  }

  if (existing.count >= config.max) {
    return { allowed: false, remaining: 0, retryAt: existing.resetAt };
  }

  existing.count += 1;
  return { allowed: true, remaining: config.max - existing.count };
}
