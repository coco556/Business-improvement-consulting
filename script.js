// モバイルメニューの制御
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")
  const menuIcon = document.getElementById("menuIcon")

  let isMenuOpen = false

  mobileMenuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen

    if (isMenuOpen) {
      mobileNav.classList.add("active")
      menuIcon.className = "fas fa-times"
    } else {
      mobileNav.classList.remove("active")
      menuIcon.className = "fas fa-bars"
    }
  })

  // モバイルメニューのリンクをクリックしたときにメニューを閉じる
  const mobileLinks = document.querySelectorAll(".nav-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMenuOpen = false
      mobileNav.classList.remove("active")
      menuIcon.className = "fas fa-bars"
    })
  })

  // スムーズスクロール
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href === "#") return

      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = target.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})
