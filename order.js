/* نفس منطق src/lib/whatsapp.ts: رقم عشوائي لكل ضغطة،
 * وخدمات تطوير المواقع على رقمين فقط. */
var phones = ["201027690446","201122645603","201145824898","201125869503"];
var servicePhones = { "تطوير موقع ويب": ["201027690446", "201122645603"] };

function orderUrl(service) {
  var pool = servicePhones[service] || phones;
  var index = Math.floor(Math.random() * pool.length);
  var message = "مرحباً JYVH، أنا مهتم بخدمة: *" + service + "*، وأريد معرفة التفاصيل والأسعار.";
  return "https://wa.me/" + pool[index] + "?text=" + encodeURIComponent(message);
}

document.addEventListener("click", function (event) {
  var link = event.target.closest ? event.target.closest("[data-order]") : null;
  if (!link) return;
  event.preventDefault();
  window.open(orderUrl(link.getAttribute("data-order")), "_blank", "noopener,noreferrer");
});
