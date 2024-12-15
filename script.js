function showDesign(device) {

    // Qurilma turini tanlash

    if (device === 'desktop') {

        document.querySelector('.desktop-design').style.display = 'block';

        document.querySelector('.mobile-design').style.display = 'none';

    } else {

        document.querySelector('.desktop-design').style.display = 'none';

        document.querySelector('.mobile-design').style.display = 'block';

    }

}

function downloadFile() {

    var link = document.createElement('a');

    link.href = 'https://mcpehub.org/engine/getfile.php?id=43602';  // Fayl URL manzili

    link.download = 'Minecraft_1_21_51.apk';  // Faylni qanday nom bilan saqlash

    link.click();  // Faylni yuklab olish

}