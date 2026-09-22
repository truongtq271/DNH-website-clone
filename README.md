# DNH Website — Mẫu giao diện bệnh viện

Đây là bản **dựng lại giao diện** (không phải bản sao mã nguồn) lấy cảm hứng bố cục/màu sắc
từ trang https://benhviennghean.com/, dùng làm mẫu tham khảo để xây dựng website riêng
cho Bệnh viện Đa khoa Đồng Nai. Toàn bộ HTML/CSS/JS được viết lại từ đầu bằng công nghệ
thuần (không framework), một số nội dung (tên bác sĩ, tin tức, thông tin pháp lý, số điện thoại...)
đang là **dữ liệu mẫu** cần thay bằng thông tin thật của bệnh viện trước khi đưa vào sử dụng.

## Cấu trúc thư mục

```
DNH-website/
├── index.html          # Trang chủ (toàn bộ các section)
├── css/style.css        # Toàn bộ style, biến màu ở đầu file (:root)
├── js/main.js           # Menu mobile, danh sách bác sĩ mẫu, active-link khi cuộn
├── assets/images/       # Logo + ảnh minh hoạ (tải từ trang tham khảo, dùng làm placeholder)
└── README.md
```

## Chạy thử

Không cần cài đặt gì, chỉ cần một static server bất kỳ, ví dụ:

```bash
python -m http.server 8765
# rồi mở http://127.0.0.1:8765/index.html
```

Hoặc mở thẳng `index.html` bằng trình duyệt (một số ảnh SVG có thể cần server để hiển thị đúng CORS).

## Việc cần làm trước khi dùng thật

- [ ] Thay `assets/images/logo.svg` bằng logo chính thức của bệnh viện.
- [ ] Thay tên bệnh viện, hotline, địa chỉ, email, số ĐKKD/giấy phép trong `index.html` (header + footer).
- [ ] Thay danh sách bác sĩ mẫu trong `js/main.js` (mảng `doctors`) bằng dữ liệu thật.
- [ ] Thay ảnh trong `assets/images/` (hero, gallery, thiết bị) bằng ảnh thật của bệnh viện —
      các ảnh hiện tại được tải về từ trang benhviennghean.com chỉ để dựng khung giao diện,
      **không nên dùng cho môi trường production** vì là ảnh của bệnh viện khác.
  - [ ] Cập nhật tin tức, danh sách chuyên khoa, trang thiết bị đúng với thực tế.
- [ ] Icon liên kết mạng xã hội (Facebook, YouTube, Zalo...) hiện là placeholder, cần gắn link thật.

## Bảng màu (biến CSS trong `css/style.css`)

| Biến | Giá trị | Ý nghĩa |
|---|---|---|
| `--color-primary` | `#039440` | Màu chủ đạo (xanh lá) |
| `--color-accent` | `#ed7c06` | Màu nhấn (cam) |
| `--color-emergency` | `#c0392b` | Cảnh báo/cấp cứu |
| `--color-ink` | `#0e1a20` | Màu chữ chính |
| `--color-bg` | `#f4fff7` | Nền tổng thể |

Font chữ: **Roboto** (Google Fonts).
