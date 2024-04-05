$(document).on('click', '.quick-view', function() {
    // Mendapatkan ID carUnit dari atribut data-id tombol yang ditekan
    var carUnitId = $(this).data('id');
    // Di sini Anda dapat menggunakan carUnitId untuk mengambil detail carUnit dari server
    // Untuk contoh, saya akan menambahkan kode untuk menampilkan gambar dan detail mobil dalam modul quick view.
    // Contoh pengambilan detail carUnit dari server (diasumsikan menggunakan AJAX)
    $.ajax({
        url: '/get-carunit-detail/' + carUnitId, // Ganti dengan URL yang sesuai untuk mengambil detail carUnit dari server
        method: 'GET',
        success: function(response) {
            // Menampilkan detail carUnit dalam modul quick view
            Swal.fire({
                title: 'Quick View',
                html: '<div class="carousel-container">' +
                        '<div class="carousel">' +
                            '<div><img src="' + assetUrl + '/' + response.image_url_1 + '" alt="Car Image 1"></div>' +
                            '<div><img src="' + assetUrl + '/' + response.image_url_2 + '" alt="Car Image 2"></div>' +
                            '<div><img src="' + assetUrl + '/' + response.image_url_3 + '" alt="Car Image 3"></div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="quick-view-details">' +
                        '<h3>' + response.name + '</h3>' + // Menampilkan detail mobil lainnya
                        '<p>Price: Rp. ' + response.price + '</p>' +
                        '<p>Description: ' + response.description + '</p>' +
                    '</div>',
                showCloseButton: true,
                showConfirmButton: false,
                didOpen: () => {
                    $('.carousel').slick({
                        autoplay: true,
                        autoplaySpeed: 2000,
                        arrows: true,
                        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
                        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
                        dots: true,
                        infinite: true
                    });
                }
            });
        },
        error: function(xhr, status, error) {
            // Penanganan kesalahan jika gagal mengambil detail carUnit
            console.error(error);
            Swal.fire({
                title: 'Error',
                text: 'Failed to fetch car unit details.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    });
});
