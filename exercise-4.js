let buah =[
    {
        nama: "Apel",
        warna: "Merah",
        namaLatin: "Malus domestica",
        tipeBiji: "Dikotil",
        gambarBuah: "https://faktualnews.co/images/2019/02/apel-1.jpg"
    },
    {
        nama: "Mangga",
        warna: "Hijau",
        namaLatin: "Mangifera indica",
        tipeBiji: "Dikotil",
        gambarBuah: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/12/30/4149872808.jpg"
    },
    {
        nama: "Stroberi",
        warna: "Merah",
        namaLatin: "Fragaria",
        tipeBiji: "Dikotil",
        gambarBuah: "http://2.bp.blogspot.com/-Br373URsb-U/UYuf6YbscSI/AAAAAAAAABc/U0kxf1pUVeg/s1600/strawberry+matang.jpg"
    },
    {
        nama: "Jambu",
        warna: "Hijau",
        namaLatin: "Psidium Guajava",
        tipeBiji: "Dikotil",
        gambarBuah: "https://mmc.tirto.id/image/otf/1024x535/2019/06/17/jambu-iji-istockphotoo_ratio-16x9.jpg"
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        namaLatin: "Musa Sp",
        tipeBiji: "Monokotil",
        gambarBuah: "https://img-o.okeinfo.net/content/2020/05/15/298/2214844/ciri-ciri-pisang-matang-sempurna-bReK2YGBA0.jpg"
    },
    {
        nama: "Jeruk",
        warna: "Orange",
        namaLatin: "Citrus",
        tipeBiji: "Dikotil",
        gambarBuah: "https://s2.bukalapak.com/img/2118773951/s-330-330/Bibit_Benih_Seeds_Buah_Jeruk_Mandarin_Ponkam_Manis_Orange_Fr.jpg.webp"
    },
    {
        nama: "Lemon",
        warna: "Kuning",
        namaLatin: "Sitrun",
        tipeBiji: "Dikotil",
        gambarBuah: "https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg"
    },
    {
        nama: "Kiwi",
        warna: "Coklat",
        namaLatin: "Actinidia",
        tipeBiji: "monokotil",
        gambarBuah: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg"
    },
]

let buahid = document.getElementById('buahID');

let display = ()=>{
    buah.forEach(item =>{

        let card = document.createElement("div");
        card.setAttribute("class","col-3 my-3");
        card.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" height="210px" src="${item.gambarBuah}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${item.nama}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Warna : ${item.warna}</li>
                  <li class="list-group-item">Nama Latin : ${item.namaLatin}</li>
                  <li class="list-group-item">Tipe Biji : ${item.tipeBiji}</li>
                </ul>
            </div>
        `;
        // `<h1>${var}</h1>`
        buahid.appendChild(card);

    });
}

display();