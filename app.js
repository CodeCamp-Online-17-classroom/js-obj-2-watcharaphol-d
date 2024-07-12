const user = {
    email: 'cc@gmail.com',
    isActive: true
};

user.isActive = false;
console.log(user);
// Result: {email: 'cc@gmail.com', isActive: false}
// ค่าของตัวแปร user จะเป็น object ที่เก็บค่า email และ isActive
// โดยค่า value ของ property isActive มีการถูกเปลี่ยนเป็น false
// สามารถเปลี่ยนค่า property ข้างในได้

user = {};
console.log(user);
// Result: Error
// เนื่องจากตัวแปร user ถูกกำหนดให้เป็นตัวแปรชนิด const ที่ไม่สามารถเปลี่ยนค่าได้
// ในบรรทัดก่อนหน้าที่มีการกำหนดให้ตัวแปร user เก็บค่า Object ตัวใหม่ที่ไม่ใช่ตัวเดิม
// จึงไม่สามารถทำได้ หรือเปลี่ยนค่าได้