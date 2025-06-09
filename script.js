// モバイルメニューの切り替え
document.addEventListener("DOMContentLoaded", () => {
  // Feather Iconsの初期化
  feather.replace()

  const menuToggle = document.getElementById("menu-toggle")
  const mobileNav = document.getElementById("mobile-nav")
  const menuIcon = document.getElementById("menu-icon")

  if (menuToggle && mobileNav && menuIcon) {
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("active")

      if (mobileNav.classList.contains("active")) {
        menuIcon.setAttribute("data-feather", "x")
      } else {
        menuIcon.setAttribute("data-feather", "menu")
      }

      feather.replace()
    })

    // モバイルメニューのリンクをクリックしたらメニューを閉じる
    const mobileNavLinks = mobileNav.querySelectorAll("a")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active")
        menuIcon.setAttribute("data-feather", "menu")
        feather.replace()
      })
    })
  }

  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // ヘッダーの高さを考慮
          behavior: "smooth",
        })
      }
    })
  })
})
