tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
};

// get products

var product = [
  {
    name: "Samsung Galaxy A55 5G",
    price: 10190000,
    image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/322670/TimerThumb/samsung-galaxy-a55-5g-8-256.jpg",
  },
  {
    name: "iPhone 13 128GB",
    price: 14490000,
    image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/223602/TimerThumb/iphone-13-(76).jpg",
  },
  {
    name: "OPPO Reno10 5G 128GB",
    price: 7990000,
    image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/309722/TimerThumb/oppo-reno10-5g-128gb-(8).jpg",
  },
  {
    name: "Xiaomi Redmi 13C 4GB",
    price: 2790000,
    image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/316771/TimerThumb/xiaomi-redmi-13c-(10).jpg",
  },
  {
    name: "vivo Y17s (4GB/128GB)",
    price: 3690000,
    image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/315651/TimerThumb/vivo-y17s-4-128-(3).jpg",
  },

  {
    name: "realme C53 (8GB/256GB)",
    price: 4290000,
    image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/317624/TimerThumb/realme-c53-8gb-(6).jpg",
  },
  {
    name: "Samsung Galaxy Tab A9+ 5G",
    price: 6390000,
    image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/522/317623/TimerThumb/samsung-galaxy-tab-a9-plus-5g-(4).jpg",
  },
  {
    name: "HP 15s fq5229TU i3 1215U (8U237PA)",
    price: 10490000,
    image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/313084/hp-15s-fq5229tu-i3-8u237pa-thumb-600x600.png",
  },
  {
    name: "Asus Vivobook X1404ZA i3 1215U (NK246W)",
    price: 9990000,
    image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/317712/asus-vivobook-x1404za-i3-nk246w-thumb-600x600.jpg",
  },
  {
    name: "Acer Aspire 3 A315 44P R9W8 R7 5700U (NX.KSJSV.002)",
    price: 11490000,
    image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/321436/acer-aspire-a315-44p-r9w8-r7-nxksjsv002-thumb-600x600.jpg",
  },
]

// render products

product.map((product) => {
  document.getElementById("products").innerHTML += `<div class="w-full overflow-hidden rounded-lg shadow-lg card bg-white">
  <figure>
    <div class="w-full h-[200px] cursor-pointer">
      <img src="${product.image}" alt="Shoes" class="w-full h-full" />
    </div>
  </figure>
  <div class="gap-0 p-3">
    <span class="text-[15px] h-10 font-medium leading-5 line-clamp-2">
      <a href="./product-details.html" class="hover:underline">
        ${product.name} </a>
    </span>
    <span class="font-medium block text-red-500">
      ${product.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1.')}đ
    </span>
    <div class="w-full mx-auto text-center mt-3">
      <button
        class="text-white bg-primary-700 dark:bg-red-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
        Mua ngay
      </button>
    </div>`
});
