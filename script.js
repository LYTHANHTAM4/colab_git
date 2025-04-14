function showMembers() {
    const members = [
        { name: "Nguyễn Duy Tín", img: "imgs/avt_tin.jpg" },
        { name: "Kiều Gia Thịnh", img: "imgs/avt_thinh.jpg" },
        { name: "Lý Thanh Tâm", img: "imgs/avt_tam.jpg" }
    ];

    const container = document.getElementById("memberList");
    container.innerHTML = "";

    members.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.style.marginBottom = "20px";

        const img = document.createElement("img");
        img.src = member.img;
        img.alt = member.name;
        img.style.width = "100px";
        img.style.display = "block";

        const name = document.createElement("p");
        name.textContent = member.name;

        memberDiv.appendChild(img);
        memberDiv.appendChild(name);
        container.appendChild(memberDiv);
    });
}
