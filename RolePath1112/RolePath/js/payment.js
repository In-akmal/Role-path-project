/* ==========================================================================
   RolePath — payment.js
   Dummy Razorpay-style checkout. In production this would create an order
   via POST /api/payments/create-order, open the real Razorpay checkout,
   then verify the payment via POST /api/payments/verify.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "java-fullstack";
  const roadmap = RP.api.getRoadmap(id);

  if(roadmap){
    document.getElementById("payName").textContent = roadmap.name;
    document.getElementById("payMeta").textContent = `${roadmap.category} · ${roadmap.duration}`;
    document.getElementById("cancelBtn").href = "roadmap-details.html?id=" + id;
  }

  document.querySelectorAll(".pay-method").forEach(m => {
    m.addEventListener("click", () => {
      document.querySelectorAll(".pay-method").forEach(o => { o.classList.remove("selected"); o.querySelector("input").checked = false; });
      m.classList.add("selected");
      m.querySelector("input").checked = true;
    });
  });

  document.getElementById("payNowBtn").addEventListener("click", () => {
    const btn = document.getElementById("payNowBtn");
    const spinner = document.getElementById("paySpinner");
    const label = document.getElementById("payBtnLabel");

    btn.disabled = true;
    spinner.style.display = "inline-block";
    label.textContent = "Processing payment…";

    setTimeout(() => {
      if(roadmap) RP.api.purchase(id);
      window.location.href = "payment-success.html?id=" + id;
    }, 1600);
  });
});
