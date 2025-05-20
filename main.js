// Thay đổi nội dung búc thư ở đây
var letterContent =" Xin Chào cục vợ chắc chắn sẽ cưới của anh, nãy giờ vợ anh làm bài có mệt lắm hong, suốt tgian qua anh biết em gặp rất nhiều chuyện và gặp rất nhiều vấn đề trong cuộc sống anh biết anh đã từng rất tệ với em nhưng lần này sau 6 tháng anh đã trưởng thành hơn rất nhiều anh sẽ không nói nữa thay vào đó anh sẽ chứng minh rằng anh thật sự yêu em và muốn bên em như thế nào hì hì, nãy h anh cũng muốn giúp em bên em lắm mà ở xa quá anh chẳng giúp đc gì cho vợ anh nên anh ngồi mò mò viết code này để gửi vợ anh. Vợ anh ơi vợ anh giỏi lắm vợ anh cố lên nha anh luôn bên vợ anh dù có xa nhau bao lâu đi nữa thì anh vẫn luôn bên vợ. ANH THƯƠNG VỢ ANH LẮM
"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
