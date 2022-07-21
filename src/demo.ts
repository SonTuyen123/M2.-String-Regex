import * as rl from 'readline-sync'

// let regexpNumber = new RegExp('^[+ 0-9]{5}$');
// let regexpNumber = /^\w+@\w+\.com$/i;
let regexpNumber = /^\w+@gmail.com$/i;
let count = 0;
function demo() {
    let number = rl.question('nhập giá trị:')
    // console.log('giá trị cần nhập phải đủ 5 ký tự từ 0-9');
    console.log('email phải có ký tự chữ hoặc số và không chứa ký tự đặc biệt');

    if (regexpNumber.test(number)) {
        console.log('đúng');
    }
    else if (count == 2) {
      throw new Error(`bạn đã nhập quá ${count} lần mời bạn chạy lại ct`);
    } else if (count < 3) {
        count++;
        console.log('nhập sai mời nhập lại');
        console.log(count);
        demo();
    }
}

demo()


