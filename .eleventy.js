module.exports = function(eleventyConfig) {
  // คำสั่งนี้สำคัญมาก: บอกให้ Eleventy ก็อปปี้โฟลเดอร์ imges, admin และไฟล์ style.css
  // ไปยังเว็บไซต์เวอร์ชันสุดท้ายด้วย เพื่อให้ทุกอย่างยังแสดงผลเหมือนเดิม
  eleventyConfig.addPassthroughCopy("imges");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("style.css");

  // เพิ่มฟังก์ชันสำหรับดึงปีปัจจุบัน (ถ้าต้องการใช้ใน footer)
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  }
