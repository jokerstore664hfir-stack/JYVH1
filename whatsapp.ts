export const phones = ["201027690446", "201122645603", "201145824898", "201125869503"];

// Web development orders go only to these two numbers; every other service keeps all four.
const servicePhones: Record<string, string[]> = {
  "تطوير موقع ويب": ["201027690446", "201122645603"],
};

export function phonesForService(service: string) {
  return servicePhones[service] ?? phones;
}

export function orderUrl(service: string, random = Math.random()) {
  const pool = phonesForService(service);
  const index = Math.min(pool.length - 1, Math.max(0, Math.floor(random * pool.length)));
  const message = `مرحباً JYVH، أنا مهتم بخدمة: *${service}*، وأريد معرفة التفاصيل والأسعار.`;
  return `https://wa.me/${pool[index]}?text=${encodeURIComponent(message)}`;
}
