/* ==========================================================================
   TOM TAT LUAT PHAT TRIEN DO THI  -  DU LIEU NOI DUNG
   --------------------------------------------------------------------------
   HUONG DAN CHO ADMIN (khong can biet lap trinh):
   1. Sua truc tiep noi dung trong tep nay, giu nguyen dau ngoac kep va dau phay.
   2. Moi tab la mot muc trong danh sach TOM_TAT, tuong ung voi mot nut tren web.
   3. "trangThai": "da-duyet" thi web moi hien noi dung.
      Doi thanh "nhap" de tam an ma KHONG mat du lieu.
   4. "capNhat": ghi ngay cap nhat theo dang dd/mm/yyyy.
   5. Cach viet noi dung:
      - "p":  doan van thuong
      - "h":  tieu de phu trong tab
      - "ul": danh sach gach dau dong, moi y mot dong trong ngoac kep
   6. Sau khi sua xong: luu tep, tai len GitHub de ghi de tep cu.
   ========================================================================== */

const TOM_TAT = [
  {
    id: "pham-vi",
    nhan: "Phạm vi điều chỉnh",
    trangThai: "da-duyet",
    nhanTrangThai: "Đã rà soát",
    capNhat: "07/11/2026",
    tieuDe: "Phạm vi điều chỉnh của Luật Phát triển đô thị",
    gioiThieu:
      "Luật Phát triển đô thị số 18/2026/QH16 quy định các cơ chế, chính sách nhằm thúc đẩy phát triển thành phố là đô thị loại đặc biệt, các thành phố khác và khu kinh tế đặc biệt. Luật tập trung tạo lập khuôn khổ pháp lý cho việc phân quyền, phân cấp, đổi mới cơ chế quản lý và huy động nguồn lực, góp phần nâng cao hiệu quả quản trị đô thị và thúc đẩy phát triển kinh tế - xã hội.",
    noiDung: [
      { loai: "p", text: "Luật quy định các nhóm nội dung chủ yếu sau:" },
      { loai: "h", text: "1. Cơ chế, chính sách thúc đẩy phát triển đô thị đặc biệt" },
      { loai: "p", text: "Quy định các cơ chế về tổ chức bộ máy, phân quyền, phân cấp, xây dựng và ban hành văn bản quy phạm pháp luật; quy hoạch, phát triển hạ tầng, kinh tế, văn hóa, xã hội, khoa học công nghệ, tài chính, ngân sách và đầu tư." },
      { loai: "h", text: "2. Cơ chế, chính sách đối với khu kinh tế đặc biệt" },
      { loai: "p", text: "Quy định về điều kiện thành lập, tổ chức quản lý, cơ chế tài chính, đầu tư, quản lý đất đai, tài nguyên, bảo vệ môi trường, thu hút nhà đầu tư chiến lược và phát triển nguồn nhân lực." },
      { loai: "h", text: "3. Cơ chế giám sát và trách nhiệm giải trình" },
      { loai: "p", text: "Quy định trách nhiệm của Quốc hội, Chính phủ, các bộ, ngành, chính quyền địa phương và các cơ quan có liên quan trong tổ chức thực hiện, kiểm tra, giám sát và bảo đảm việc thực thi Luật." },
      { loai: "h", text: "4. Quy định chuyển tiếp và tổ chức thi hành" },
      { loai: "p", text: "Quy định việc áp dụng các cơ chế, chính sách mới, xử lý các chương trình, dự án đang triển khai và bảo đảm tính liên tục trong hoạt động quản lý nhà nước." }
    ],
    canCu: "Điều 1; Chương II; Chương III; Chương IV và Chương V Luật số 18/2026/QH16."
  },
  {
    id: "doi-tuong",
    nhan: "Đối tượng áp dụng",
    trangThai: "da-duyet",
    nhanTrangThai: "Đã rà soát",
    capNhat: "07/11/2026",
    tieuDe: "Những đối tượng chịu sự điều chỉnh của Luật",
    gioiThieu:
      "Luật Phát triển đô thị được áp dụng đối với các cơ quan, tổ chức, cá nhân có liên quan đến việc tổ chức, quản lý, thực hiện các cơ chế, chính sách phát triển đô thị đặc biệt và khu kinh tế đặc biệt theo phạm vi, điều kiện được quy định tại Luật.",
    noiDung: [
      { loai: "h", text: "1. Thành phố Hồ Chí Minh và các thành phố là đô thị đặc biệt" },
      { loai: "p", text: "Thành phố Hồ Chí Minh và thành phố khác là đô thị đặc biệt được áp dụng các cơ chế, chính sách thúc đẩy phát triển đô thị đặc biệt theo quy định của Luật." },
      { loai: "p", text: "Riêng thành phố Hà Nội thực hiện theo quy định của Luật Thủ đô." },
      { loai: "h", text: "2. Các thành phố khác" },
      { loai: "p", text: "Thành phố không thuộc trường hợp quy định đối với đô thị đặc biệt được áp dụng một số cơ chế, chính sách phát triển đô thị theo quy định của Luật, trừ những nội dung được loại trừ tại khoản 3 Điều 1." },
      { loai: "h", text: "3. Khu kinh tế đặc biệt" },
      { loai: "p", text: "Các khu kinh tế đặc biệt được công nhận theo tiêu chí quy định tại Luật được áp dụng các cơ chế, chính sách phát triển riêng nhằm nâng cao năng lực cạnh tranh, thu hút đầu tư và thúc đẩy phát triển kinh tế - xã hội." },
      { loai: "h", text: "4. Các cơ quan, tổ chức và cá nhân có liên quan" },
      { loai: "p", text: "Bao gồm các cơ quan nhà nước, tổ chức chính trị, tổ chức chính trị - xã hội, doanh nghiệp, nhà đầu tư và các tổ chức, cá nhân tham gia hoặc có hoạt động liên quan đến việc thực hiện các cơ chế, chính sách được quy định tại Luật." }
    ],
    canCu: "Khoản 2, khoản 3, khoản 4 Điều 1; Điều 2; Điều 3 và các quy định có liên quan của Luật số 18/2026/QH16.",
    luuY: "Mục 4 là nhóm đối tượng được khái quát từ phạm vi điều chỉnh và các chủ thể tham gia thực hiện Luật, không phải một danh mục đối tượng được liệt kê riêng tại Điều 1."
  },
  {
    id: "quy-dinh",
    nhan: "Nhóm quy định cần biết",
    trangThai: "da-duyet",
    nhanTrangThai: "Đã rà soát",
    capNhat: "07/11/2026",
    tieuDe: "Những nhóm chính sách trọng tâm của Luật Phát triển đô thị",
    gioiThieu:
      "Luật Phát triển đô thị thiết lập hệ thống cơ chế, chính sách trên nhiều lĩnh vực, từ tổ chức bộ máy, quy hoạch, hạ tầng đến tài chính, ngân sách, đầu tư và quản lý khu kinh tế đặc biệt. Các quy định hướng đến tăng cường tính chủ động của chính quyền địa phương, huy động hiệu quả các nguồn lực và tạo động lực phát triển đô thị bền vững.",
    noiDung: [
      { loai: "p", text: "Luật được hệ thống hóa thành 08 nhóm quy định để người đọc dễ tìm hiểu:" },
      { loai: "h", text: "01. Tổ chức bộ máy và phân quyền, phân cấp" },
      { loai: "p", text: "Quy định thẩm quyền của HĐND, UBND, Chủ tịch UBND Thành phố; tổ chức bộ máy, chế độ công vụ và cơ chế ban hành văn bản quy phạm pháp luật." },
      { loai: "p", text: "Căn cứ: Điều 6 – Điều 9." },
      { loai: "h", text: "02. Quy hoạch, xây dựng và phát triển hạ tầng" },
      { loai: "p", text: "Các cơ chế về quy hoạch, không gian đô thị, phát triển giao thông công cộng, TOD, chỉnh trang và tái thiết đô thị." },
      { loai: "p", text: "Căn cứ: Mục 2, Chương II." },
      { loai: "h", text: "03. Phát triển kinh tế, thương mại và dịch vụ" },
      { loai: "p", text: "Các chính sách phát triển doanh nghiệp, kinh tế biển, khu thương mại tự do, khu logistics tích hợp, trung tâm tài chính quốc tế và các ngành dịch vụ." },
      { loai: "p", text: "Căn cứ: Mục 3, Chương II." },
      { loai: "h", text: "04. Văn hóa, xã hội và nguồn nhân lực" },
      { loai: "p", text: "Chính sách phát triển văn hóa, thể thao, du lịch, giáo dục, y tế, an sinh xã hội và thu hút nguồn nhân lực chất lượng cao." },
      { loai: "p", text: "Căn cứ: Mục 4, Chương II và Điều 38." },
      { loai: "h", text: "05. Khoa học công nghệ và đổi mới sáng tạo" },
      { loai: "p", text: "Cơ chế phát triển khoa học công nghệ, chuyển đổi số, thử nghiệm có kiểm soát và phát triển khu công nghệ cao." },
      { loai: "p", text: "Căn cứ: Mục 5, Chương II." },
      { loai: "h", text: "06. Tài chính, ngân sách và đầu tư" },
      { loai: "p", text: "Cơ chế quản lý ngân sách, bổ sung nguồn thu, phát hành trái phiếu chính quyền địa phương, quyết định chủ trương đầu tư, PPP và huy động nguồn lực xã hội." },
      { loai: "p", text: "Căn cứ: Điều 33 – Điều 35." },
      { loai: "h", text: "07. Đất đai, tài nguyên và thu hút đầu tư" },
      { loai: "p", text: "Quy định về thu hồi đất, giao đất, cho thuê đất, quản lý tài nguyên, lựa chọn nhà đầu tư chiến lược và chính sách ưu đãi đầu tư." },
      { loai: "p", text: "Căn cứ: Điều 36 – Điều 39; Chương III." },
      { loai: "h", text: "08. Giám sát và trách nhiệm giải trình" },
      { loai: "p", text: "Quy định trách nhiệm của các cơ quan trong tổ chức thực hiện, kiểm tra, giám sát, công khai, minh bạch và giải trình việc thực hiện chính sách." },
      { loai: "p", text: "Căn cứ: Chương IV." }
    ],
    canCu: "Chương II (Điều 6 – Điều 42); Chương III (Điều 43 – Điều 54); Chương IV (Điều 55 – Điều 62) Luật số 18/2026/QH16."
  },
  {
    id: "tai-chinh",
    nhan: "Liên hệ ngành Tài chính",
    trangThai: "da-duyet",
    nhanTrangThai: "Góc nhìn chuyên môn",
    capNhat: "07/11/2026",
    tieuDe: "Vai trò của ngành Tài chính trong thực hiện Luật Phát triển đô thị",
    gioiThieu:
      "Tài chính là một trong những nguồn lực quan trọng bảo đảm thực hiện các mục tiêu phát triển đô thị. Luật Phát triển đô thị số 18/2026/QH16 đặt ra nhiều cơ chế liên quan trực tiếp đến quản lý ngân sách, đầu tư công, huy động vốn, quản lý tài sản công, đất đai và thu hút đầu tư. Đối với ngành Tài chính, việc nghiên cứu và triển khai các quy định của Luật có ý nghĩa quan trọng trong tham mưu cơ chế tài chính, phân bổ nguồn lực, nâng cao hiệu quả đầu tư và bảo đảm công khai, minh bạch trong quản lý nhà nước.",
    noiDung: [
      { loai: "h", text: "1. Quản lý tài chính, ngân sách – Bảo đảm nguồn lực phát triển" },
      { loai: "p", text: "Điều 33 quy định cơ chế quản lý, sử dụng tài chính, ngân sách Thành phố, trong đó có các khoản thu ngân sách, cơ chế bổ sung nguồn thu và các nội dung về phân bổ, sử dụng ngân sách." },
      { loai: "p", text: "Đây là cơ sở quan trọng để nghiên cứu, tham mưu các giải pháp quản lý nguồn lực tài chính, bảo đảm cân đối ngân sách và đáp ứng yêu cầu đầu tư phát triển Thành phố." },
      { loai: "h", text: "2. Huy động vốn và đầu tư – Đa dạng hóa nguồn lực" },
      { loai: "p", text: "Điều 33 và Điều 34 quy định các cơ chế liên quan đến phát hành trái phiếu chính quyền địa phương, quyết định chủ trương đầu tư, dự án đầu tư công và dự án PPP." },
      { loai: "p", text: "Ngành Tài chính có vai trò tham mưu về nguồn lực, cơ chế tài chính, cân đối vốn và các vấn đề thuộc chức năng, nhiệm vụ được giao, góp phần nâng cao hiệu quả sử dụng vốn đầu tư." },
      { loai: "h", text: "3. Quản lý, sử dụng tài sản công và khai thác nguồn lực đất đai" },
      { loai: "p", text: "Các quy định về quản lý tài sản công, đất đai, thu hồi đất, giao đất, cho thuê đất và khai thác quỹ đất có mối liên hệ với công tác quản lý tài chính công và tài sản công." },
      { loai: "p", text: "Đây là cơ sở để tăng cường quản lý, khai thác hiệu quả nguồn lực tài sản, đất đai, bảo đảm sử dụng đúng mục đích và phù hợp với quy hoạch phát triển đô thị." },
      { loai: "h", text: "4. Thu hút đầu tư và phát triển kinh tế" },
      { loai: "p", text: "Điều 35, Điều 36 và Điều 39 quy định các cơ chế liên quan đến sự tham gia của khu vực kinh tế tư nhân, thu hút nhà đầu tư chiến lược và chính sách ưu đãi, hỗ trợ đầu tư." },
      { loai: "p", text: "Ngành Tài chính cần quan tâm nghiên cứu tác động của các cơ chế này đến nguồn thu ngân sách, hiệu quả đầu tư, môi trường kinh doanh và khả năng huy động nguồn lực xã hội." },
      { loai: "h", text: "5. Quản lý tài chính tại khu kinh tế đặc biệt" },
      { loai: "p", text: "Chương III của Luật quy định các cơ chế về ngân sách, đầu tư, đất đai, tài nguyên, chính sách thuế và thu hút nguồn nhân lực tại khu kinh tế đặc biệt." },
      { loai: "p", text: "Đây là lĩnh vực cần có sự phối hợp giữa các cơ quan quản lý nhà nước trong việc tham mưu cơ chế tài chính, quản lý nguồn thu, kiểm soát ưu đãi và bảo đảm hiệu quả kinh tế - xã hội." },
      { loai: "h", text: "6. Nâng cao trách nhiệm giải trình và hiệu quả quản lý nhà nước" },
      { loai: "p", text: "Chương IV quy định trách nhiệm của các cơ quan trong tổ chức thực hiện, giám sát, kiểm tra và giải trình." },
      { loai: "p", text: "Đối với ngành Tài chính, yêu cầu đặt ra là tăng cường kỷ luật, kỷ cương tài chính; nâng cao chất lượng tham mưu; bảo đảm công khai, minh bạch và sử dụng hiệu quả các nguồn lực được giao quản lý." },
      { loai: "h", text: "Tuổi trẻ Tài chính đồng hành cùng phát triển đô thị" },
      { loai: "p", text: "Mỗi đoàn viên, thanh niên ngành Tài chính cần chủ động nghiên cứu, nắm vững các quy định pháp luật; nâng cao năng lực chuyên môn, tư duy quản lý tài chính công và tinh thần trách nhiệm trong thực thi công vụ." },
      { loai: "p", text: "Phát huy vai trò xung kích, sáng tạo của tuổi trẻ trong tham mưu, đề xuất sáng kiến, cải cách hành chính và nâng cao hiệu quả quản lý, sử dụng nguồn lực nhà nước." },
      { loai: "p", text: "Hiểu đúng Luật – Vững chuyên môn – Sáng tạo trong hành động – Đồng hành cùng Thành phố phát triển." }
    ],
    canCu: "Điều 33 – Điều 39; Điều 49 – Điều 53; Điều 55 – Điều 62 Luật số 18/2026/QH16.",
    luuY: "Phần liên hệ ngành Tài chính là nội dung phân tích chức năng, nhiệm vụ chuyên môn và ý nghĩa thực tiễn của Luật; không phải Luật giao toàn bộ các nhiệm vụ nêu trên cho riêng Sở Tài chính. Các thẩm quyền cụ thể vẫn phải căn cứ từng điều luật và văn bản phân công của cơ quan có thẩm quyền."
  }
];

/* --------------------------------------------------------------------------
   TAI LIEU THAM KHAO  -  them hoac sua dong tai lieu o day
   "loai": "van-ban" | "huong-dan" | "chuyen-de"
   -------------------------------------------------------------------------- */
const TAI_LIEU = [
  {
    loai: "van-ban",
    ma: "VB",
    nhanLoai: "Văn bản pháp luật",
    tieuDe: "Luật Phát triển đô thị số 18/2026/QH16",
    nguon: "Quốc hội thông qua ngày 24/8/2026 · Có hiệu lực từ 01/10/2026",
    capNhat: "07/11/2026",
    lienKet: [
      { nhan: "Cổng Thông tin điện tử Chính phủ", url: "https://chinhphu.vn/?classid=1&docid=219486&orggroupid=1&pageid=27160" },
      { nhan: "Công báo điện tử", url: "https://congbao.chinhphu.vn/van-ban/luat-so-18-2026-qh16-470429.htm" },
      { nhan: "Sở Tài chính TP. Hồ Chí Minh", url: "https://sotaichinh.hochiminhcity.gov.vn/van-ban/luat-phat-trien-do-thi.html" }
    ]
  },
  {
    loai: "van-ban",
    ma: "LTD",
    nhanLoai: "Văn bản liên quan",
    tieuDe: "Luật Thủ đô",
    nguon: "Văn bản áp dụng đối với thành phố Hà Nội theo quy định tại Luật Phát triển đô thị",
    capNhat: "07/11/2026",
    lienKet: [
      { nhan: "Tra cứu tại Cổng Thông tin điện tử Chính phủ", url: "https://chinhphu.vn" }
    ]
  },
  {
    loai: "huong-dan",
    ma: "HD",
    nhanLoai: "Tài liệu hướng dẫn",
    tieuDe: "Văn bản hướng dẫn thi hành Luật Phát triển đô thị",
    nguon: "Cơ quan có thẩm quyền · Cập nhật khi có văn bản mới",
    capNhat: "07/11/2026",
    lienKet: []
  },
  {
    loai: "chuyen-de",
    ma: "CĐ",
    nhanLoai: "Tài liệu chuyên đề",
    tieuDe: "Chuyên đề tài chính công và nguồn lực phát triển đô thị",
    nguon: "Do Đoàn Sở Tài chính biên soạn và rà soát",
    capNhat: "07/11/2026",
    lienKet: []
  }
];


/* --------------------------------------------------------------------------
   PHAP LUAT TRUC QUAN - INFOGRAPHIC
   --------------------------------------------------------------------------
   HUONG DAN CHO ADMIN:
   - Moi infographic la mot muc trong danh sach INFOGRAPHIC.
   - Truong "tomTat" la mo ta ngan hien tren the o trang chu.
   - Truong "thietKe" ghi chu mau sac / huong thiet ke (chi hien thi noi bo).
   - "khoi": danh sach cac phan ben trong. Cac loai khoi duoc ho tro:
       "soLieu"  -> { loai, muc: [{so, nhan}] }          o dem so lieu lon
       "muc"     -> { loai, so, tieuDe, text, canCu }     muc co so thu tu
       "cacMuc"  -> { loai, tieuDe, muc: [{ten, text}] }  luoi cac muc nho
       "buoc"    -> { loai, so, tieuDe, muc: [..], dauRa } cac buoc quy trinh
       "nhan"    -> { loai, tieuDe, muc: [{ten, text}] }  cac tu khoa / nguyen tac
       "thongDiep" -> { loai, text }                      cau thong diep
       "luuY"    -> { loai, text }                        ghi chu quan trong
   - "canCu": can cu phap ly hien o cuoi infographic.
   - "trangThai": "da-duyet" thi web moi hien.
   -------------------------------------------------------------------------- */

const INFOGRAPHIC = [
  {
    id: "tong-quan",
    so: "01",
    nhan: "Tổng quan",
    lopMau: "mau-1",
    trangThai: "da-duyet",
    capNhat: "07/11/2026",
    tieuDe: "Những nội dung cần biết về phát triển đô thị",
    tomTat: "Sơ đồ tổng quan 05 chương, 66 điều và các nhóm cơ chế, chính sách trọng tâm.",
    nhanLienKet: "Xem infographic →",
    thietKe: "Xanh ngọc – tổng quan, kiến thức.",
    phuDe: "Quốc hội thông qua ngày 24/8/2026",
    khoi: [
      { loai: "soLieu", muc: [ { so: "05", nhan: "Chương" }, { so: "66", nhan: "Điều" } ] },
      {
        loai: "muc",
        tieuDe: "05 chương – 05 nhóm nội dung",
        muc: [
          { so: "1", ten: "Chương I – Những quy định chung", text: "Phạm vi điều chỉnh, giải thích từ ngữ, nguyên tắc phân quyền và áp dụng pháp luật." },
          { so: "2", ten: "Chương II – Cơ chế, chính sách thúc đẩy phát triển đô thị đặc biệt", text: "Tổ chức bộ máy, quy hoạch, kinh tế, xã hội, khoa học công nghệ, tài chính, đầu tư và liên kết vùng." },
          { so: "3", ten: "Chương III – Cơ chế, chính sách phát triển khu kinh tế đặc biệt", text: "Tổ chức quản lý, đầu tư, đất đai, tài chính, thuế, môi trường và nguồn nhân lực." },
          { so: "4", ten: "Chương IV – Giám sát, thanh tra, kiểm tra và trách nhiệm giải trình", text: "Trách nhiệm của các cơ quan và chính quyền địa phương." },
          { so: "5", ten: "Chương V – Điều khoản thi hành", text: "Hiệu lực thi hành và các quy định chuyển tiếp." }
        ]
      },
      {
        loai: "nhan",
        tieuDe: "05 định hướng trọng tâm",
        muc: [
          { ten: "Phân quyền", text: "Tăng tính chủ động quản lý" },
          { ten: "Quy hoạch", text: "Phát triển không gian đô thị" },
          { ten: "Tài chính", text: "Huy động nguồn lực" },
          { ten: "Đầu tư", text: "Thu hút nguồn vốn phát triển" }
        ]
      },
      { loai: "thongDiep", text: "Hoàn thiện cơ chế, khơi thông nguồn lực, thúc đẩy phát triển đô thị hiện đại và bền vững." }
    ],
    canCu: "Luật số 18/2026/QH16, Chương I đến Chương V."
  },
  {
    id: "quy-trinh",
    so: "02",
    nhan: "Quy trình",
    lopMau: "mau-2",
    trangThai: "da-duyet",
    capNhat: "07/11/2026",
    tieuDe: "Từ chủ trương đến triển khai chương trình, dự án",
    tomTat: "Minh họa các bước xác định dự án, quyết định chủ trương, lựa chọn nhà đầu tư và tổ chức thực hiện.",
    nhanLienKet: "Xem sơ đồ →",
    thietKe: "Xanh navy – quy trình, quản lý.",
    phuDe: "Từ định hướng đầu tư đến tổ chức thực hiện",
    khoi: [
      {
        loai: "buoc",
        tieuDe: "Quy trình triển khai dự án",
        muc: [
          { so: "1", ten: "Xác định và đề xuất dự án", dauRa: "Đầu vào",
            text: ["Xác định mục tiêu, quy mô và lĩnh vực đầu tư.", "Đánh giá sự phù hợp với quy hoạch, định hướng phát triển.", "Xác định nguồn vốn và tính chất dự án."] },
          { so: "2", ten: "Xem xét, quyết định chủ trương đầu tư", dauRa: "Quyết định đầu tư",
            text: ["Xác định thẩm quyền quyết định của HĐND Thành phố, UBND Thành phố hoặc Chủ tịch UBND Thành phố.", "Xem xét nguồn vốn, quy mô và tính chất dự án.", "Thực hiện trình tự, thủ tục theo quy định tương ứng."] },
          { so: "3", ten: "Lựa chọn nhà đầu tư", dauRa: "Lựa chọn nhà đầu tư",
            text: ["Xác định hình thức lựa chọn nhà đầu tư.", "Xem xét điều kiện đối với nhà đầu tư chiến lược.", "Thực hiện thủ tục lựa chọn đối với dự án PPP hoặc các dự án thuộc trường hợp áp dụng hình thức tương ứng."] },
          { so: "4", ten: "Hoàn thiện thủ tục và triển khai", dauRa: "Tổ chức thực hiện",
            text: ["Thực hiện các thủ tục về đất đai, xây dựng, môi trường.", "Hoàn thiện các điều kiện đầu tư.", "Tổ chức thực hiện và giải ngân theo tiến độ, nghĩa vụ đã cam kết."] },
          { so: "5", ten: "Theo dõi, kiểm tra và giám sát", dauRa: "Giám sát và đánh giá",
            text: ["Theo dõi tiến độ thực hiện.", "Kiểm tra việc thực hiện nghĩa vụ của nhà đầu tư.", "Giám sát sử dụng nguồn lực, hiệu quả dự án.", "Thực hiện trách nhiệm giải trình và xử lý các vấn đề phát sinh."] }
        ]
      },
      { loai: "luuY", tieuDe: "Lưu ý quan trọng", text: "Trình tự, thẩm quyền và thủ tục cụ thể phụ thuộc vào loại dự án, nguồn vốn, hình thức đầu tư và các điều kiện pháp luật có liên quan. Sơ đồ trên là mô hình khái quát, không thay thế quy trình pháp lý riêng của từng loại dự án." }
    ],
    canCu: "Điều 34, Điều 36 và các quy định có liên quan tại Điều 37, Điều 39 Luật số 18/2026/QH16."
  },
  {
    id: "nguon-luc",
    so: "03",
    nhan: "Nguồn lực",
    lopMau: "mau-3",
    trangThai: "da-duyet",
    capNhat: "07/11/2026",
    tieuDe: "Góc nhìn về nguồn lực tài chính cho đô thị",
    tomTat: "Khái quát cơ chế ngân sách, trái phiếu, đầu tư công, PPP và thu hút nguồn lực tư nhân.",
    nhanLienKet: "Xem infographic →",
    thietKe: "Vàng ánh kim – tài chính, nguồn lực.",
    phuDe: "Động lực phát triển đô thị · Tài chính – Ngân sách – Đầu tư – Hợp tác công tư",
    khoi: [
      {
        loai: "cacMuc",
        tieuDe: "01. Các nguồn lực",
        muc: [
          { ten: "Ngân sách nhà nước", text: "Nguồn thu ngân sách và cơ chế bổ sung nguồn thu theo Luật." },
          { ten: "Trái phiếu chính quyền", text: "Huy động vốn phục vụ nhu cầu đầu tư phát triển." },
          { ten: "Đầu tư tư nhân và PPP", text: "Phát huy nguồn lực xã hội và hợp tác công tư." },
          { ten: "Nhà đầu tư chiến lược", text: "Thu hút vốn, công nghệ và năng lực quản trị." }
        ]
      },
      {
        loai: "buoc",
        tieuDe: "02. Cơ chế quản lý và phân bổ",
        muc: [
          { so: "1", ten: "Xác định mục tiêu và ưu tiên đầu tư", text: [] },
          { so: "2", ten: "Cân đối, phân bổ nguồn lực theo thẩm quyền", text: [] },
          { so: "3", ten: "Tổ chức thực hiện các chương trình, dự án", text: [] },
          { so: "4", ten: "Đánh giá hiệu quả sử dụng nguồn lực", text: [] }
        ]
      },
      {
        loai: "nhan",
        tieuDe: "03. Nguyên tắc cần bảo đảm",
        muc: [
          { ten: "Đúng thẩm quyền", text: "" },
          { ten: "Công khai, minh bạch", text: "" },
          { ten: "Hiệu quả, tiết kiệm", text: "" },
          { ten: "Trách nhiệm giải trình", text: "" }
        ]
      },
      { loai: "thongDiep", text: "Huy động đa dạng nguồn lực – Phân bổ đúng trọng tâm – Sử dụng hiệu quả – Thúc đẩy phát triển đô thị bền vững." }
    ],
    canCu: "Điều 33, Điều 34, Điều 35, Điều 36 và các quy định liên quan của Luật số 18/2026/QH16.",
    luuY: "Infographic này cần đặc biệt làm rõ các quy định tại Điều 33 và Điều 34: Điều 33 có những cơ chế ngân sách cụ thể; Điều 34 quy định thẩm quyền quyết định chủ trương đầu tư và dự án PPP."
  }
];


/* --------------------------------------------------------------------------
   GOC NHIN TAI CHINH - DIEN DAN CHI DOAN
   --------------------------------------------------------------------------
   HUONG DAN CHO ADMIN:
   - Moi bai viet la mot muc trong danh sach BAI_VIET.
   - "trangThai": "da-duyet" thi web moi hien. Doi thanh "nhap" de tam an.
   - "noiBat": true de dat bai o khung bai viet tieu diem.
   - "noiDung" ho tro: "h" (tieu de muc), "h4" (tieu de nho), "p" (doan van), "ul" (danh sach).
   -------------------------------------------------------------------------- */
const BAI_VIET = [
  {
    "id": "quan-ly-tai-chinh-cong",
    "trangThai": "da-duyet",
    "noiBat": true,
    "tieuDe": "Quản lý tài chính công trong phát triển đô thị: Những vấn đề đoàn viên cần quan tâm",
    "chuyenMuc": "Góc nhìn Tài chính · Diễn đàn Chi đoàn",
    "thoiGianDoc": "8–10 phút đọc",
    "nhan": "Phân tích chính sách",
    "tomTat": "Tài chính công hiệu quả – Nguồn lực vững chắc – Đô thị phát triển bền vững.",
    "thongDiep": "Tài chính công hiệu quả – Nguồn lực vững chắc – Đô thị phát triển bền vững.",
    "nguon": "Nguồn: Luật Phát triển đô thị số 18/2026/QH16, trọng tâm Điều 33, Điều 34, Điều 35, Điều 36, Điều 37 và các quy định có liên quan.",
    "noiDung": [
      {
        "loai": "h",
        "text": "1. Tài chính công – Nền tảng bảo đảm nguồn lực phát triển đô thị"
      },
      {
        "loai": "p",
        "text": "Phát triển đô thị hiện đại không chỉ đòi hỏi tầm nhìn quy hoạch, hệ thống hạ tầng đồng bộ và môi trường đầu tư thuận lợi, mà còn phụ thuộc rất lớn vào khả năng huy động, phân bổ và sử dụng hiệu quả các nguồn lực tài chính công. Trong bối cảnh Thành phố Hồ Chí Minh đang đứng trước yêu cầu phát triển nhanh, bền vững và nâng cao năng lực cạnh tranh, việc đổi mới cơ chế quản lý tài chính, ngân sách có ý nghĩa đặc biệt quan trọng."
      },
      {
        "loai": "p",
        "text": "Luật Phát triển đô thị số 18/2026/QH16 được Quốc hội thông qua ngày 24 tháng 8 năm 2026 đã đặt ra nhiều cơ chế, chính sách mới nhằm thúc đẩy phát triển đô thị đặc biệt. Trong đó, các quy định tại Điều 33 về quản lý, sử dụng tài chính, ngân sách và Điều 34 về thẩm quyền, cơ chế đầu tư là những nội dung có liên hệ trực tiếp đến công tác quản lý tài chính công, mở ra những cơ hội mới trong việc tạo lập và khai thác nguồn lực phục vụ phát triển Thành phố."
      },
      {
        "loai": "h",
        "text": "2. Đổi mới cơ chế tài chính, ngân sách – Tăng tính chủ động trong phát triển Thành phố"
      },
      {
        "loai": "p",
        "text": "Một trong những nội dung đáng chú ý của Luật là cơ chế quản lý, sử dụng tài chính, ngân sách Thành phố được quy định tại Điều 33."
      },
      {
        "loai": "p",
        "text": "Theo đó, Luật quy định cơ chế bổ sung có mục tiêu từ ngân sách trung ương cho ngân sách Thành phố gắn với tỷ lệ các khoản thu được phân chia giữa ngân sách trung ương và ngân sách Thành phố; đồng thời quy định các khoản thu ngân sách Thành phố được hưởng theo cơ chế riêng. Đây là cơ sở quan trọng nhằm tăng cường nguồn lực tài chính, tạo điều kiện để Thành phố chủ động hơn trong việc thực hiện các nhiệm vụ phát triển kinh tế - xã hội."
      },
      {
        "loai": "p",
        "text": "Bên cạnh đó, Luật quy định thẩm quyền của Hội đồng nhân dân Thành phố trong việc quyết định các nội dung liên quan đến ngân sách, bao gồm việc sử dụng các khoản thu tăng thêm, nguồn thưởng vượt dự toán, phát hành trái phiếu chính quyền địa phương và các cơ chế hỗ trợ đầu tư thuộc thẩm quyền."
      },
      {
        "loai": "p",
        "text": "Những quy định này cho thấy định hướng tăng cường tính chủ động, linh hoạt trong quản lý tài chính, ngân sách, đồng thời đặt ra yêu cầu cao hơn đối với công tác dự báo nguồn thu, xây dựng phương án phân bổ ngân sách và kiểm soát hiệu quả sử dụng nguồn lực."
      },
      {
        "loai": "p",
        "text": "Vấn đề đặt ra không chỉ là huy động được nhiều nguồn lực hơn, mà quan trọng hơn là phải bảo đảm nguồn lực được phân bổ đúng trọng tâm, gắn với mục tiêu phát triển và tạo ra giá trị thực chất cho Thành phố."
      },
      {
        "loai": "h",
        "text": "3. Huy động và sử dụng hiệu quả nguồn lực đầu tư – Kết hợp vai trò Nhà nước và khu vực tư nhân"
      },
      {
        "loai": "p",
        "text": "Bên cạnh cơ chế ngân sách, Điều 34 của Luật quy định về thẩm quyền và cơ chế đầu tư, trong đó xác định thẩm quyền quyết định chủ trương đầu tư đối với các dự án đầu tư công, dự án PPP và các dự án thuộc phạm vi điều chỉnh của Luật."
      },
      {
        "loai": "p",
        "text": "Đáng chú ý, cơ chế đầu tư được thiết kế theo hướng tạo điều kiện để Thành phố chủ động hơn trong việc xem xét, quyết định các dự án thuộc thẩm quyền, đồng thời thúc đẩy sự tham gia của khu vực kinh tế tư nhân thông qua các hình thức đầu tư phù hợp."
      },
      {
        "loai": "p",
        "text": "Cùng với đó, Điều 35 quy định về sự tham gia của khu vực kinh tế tư nhân trong quản lý, sử dụng, vận hành và khai thác tài sản kết cấu hạ tầng. Điều 36 quy định về thu hút nhà đầu tư chiến lược, với các tiêu chí, điều kiện và chính sách ưu đãi tương ứng."
      },
      {
        "loai": "p",
        "text": "Việc kết hợp nguồn lực nhà nước với nguồn lực tư nhân có thể góp phần giảm áp lực lên ngân sách, mở rộng khả năng đầu tư phát triển hạ tầng và nâng cao chất lượng cung ứng dịch vụ công."
      },
      {
        "loai": "p",
        "text": "Tuy nhiên, quá trình huy động nguồn lực cần được đặt trong mối quan hệ hài hòa giữa lợi ích Nhà nước, nhà đầu tư và cộng đồng. Việc lựa chọn nhà đầu tư, xác định cơ chế hỗ trợ, ưu đãi và phân chia trách nhiệm phải bảo đảm đúng quy định, công khai, minh bạch và có khả năng kiểm soát rủi ro."
      },
      {
        "loai": "h",
        "text": "4. Khai thác nguồn lực đất đai – Gắn quản lý tài sản công với hiệu quả phát triển đô thị"
      },
      {
        "loai": "p",
        "text": "Đất đai là nguồn lực quan trọng trong quá trình phát triển đô thị, vừa là tư liệu sản xuất đặc biệt, vừa là nguồn lực tài chính có khả năng tạo nguồn thu cho ngân sách nhà nước."
      },
      {
        "loai": "p",
        "text": "Điều 37 của Luật quy định các cơ chế về quản lý, sử dụng, bảo vệ tài nguyên, trong đó có các nội dung liên quan đến thu hồi đất, giao đất, cho thuê đất, khai thác quỹ đất và phát triển không gian đô thị."
      },
      {
        "loai": "p",
        "text": "Đối với công tác quản lý tài chính công, vấn đề đặt ra là phải gắn việc khai thác nguồn lực đất đai với quy hoạch, kế hoạch sử dụng đất, mục tiêu phát triển đô thị và hiệu quả kinh tế - xã hội. Việc quản lý, sử dụng quỹ đất và tài sản công cần được thực hiện chặt chẽ, bảo đảm đúng mục đích, tránh thất thoát, lãng phí và phát huy tối đa giá trị nguồn lực công."
      },
      {
        "loai": "p",
        "text": "Đặc biệt, đối với các khu vực có tiềm năng phát triển đô thị, việc kết hợp quy hoạch, đầu tư hạ tầng và khai thác giá trị đất đai cần được nghiên cứu đồng bộ, bảo đảm hài hòa lợi ích giữa Nhà nước, nhà đầu tư và người dân."
      },
      {
        "loai": "h",
        "text": "5. Những vấn đề đặt ra đối với công tác quản lý tài chính công"
      },
      {
        "loai": "p",
        "text": "Các cơ chế mới của Luật Phát triển đô thị mở ra nhiều cơ hội trong việc huy động nguồn lực và nâng cao tính chủ động của Thành phố. Tuy nhiên, để các cơ chế này thực sự phát huy hiệu quả, cần quan tâm một số vấn đề sau:"
      },
      {
        "loai": "h4",
        "text": "Thứ nhất, nâng cao chất lượng dự báo và quản lý nguồn thu ngân sách."
      },
      {
        "loai": "p",
        "text": "Việc mở rộng các cơ chế huy động nguồn lực cần đi đôi với nâng cao chất lượng dự báo thu, đánh giá khả năng cân đối ngân sách và xây dựng kế hoạch tài chính phù hợp với yêu cầu phát triển trong từng giai đoạn."
      },
      {
        "loai": "h4",
        "text": "Thứ hai, bảo đảm hiệu quả trong phân bổ và sử dụng vốn đầu tư."
      },
      {
        "loai": "p",
        "text": "Nguồn lực tài chính cần được ưu tiên cho các chương trình, dự án có tính lan tỏa, khả năng kết nối hạ tầng và đóng góp thiết thực vào phát triển kinh tế - xã hội. Đồng thời, cần tăng cường theo dõi tiến độ, kiểm soát chi phí và đánh giá hiệu quả sau đầu tư."
      },
      {
        "loai": "h4",
        "text": "Thứ ba, kiểm soát rủi ro trong huy động nguồn lực ngoài ngân sách."
      },
      {
        "loai": "p",
        "text": "Việc phát hành trái phiếu chính quyền địa phương, triển khai dự án PPP và thu hút nhà đầu tư chiến lược cần được xem xét trên cơ sở khả năng cân đối tài chính, nghĩa vụ ngân sách, hiệu quả kinh tế - xã hội và khả năng thực hiện các cam kết dài hạn."
      },
      {
        "loai": "h4",
        "text": "Thứ tư, nâng cao hiệu quả quản lý, khai thác tài sản công và đất đai."
      },
      {
        "loai": "p",
        "text": "Cần tăng cường công khai, minh bạch trong quản lý, sử dụng và khai thác các nguồn lực công; bảo đảm việc xác định giá trị, phương thức khai thác và sử dụng nguồn thu tuân thủ quy định pháp luật."
      },
      {
        "loai": "h4",
        "text": "Thứ năm, tăng cường phối hợp giữa các cơ quan trong tổ chức thực hiện."
      },
      {
        "loai": "p",
        "text": "Các cơ chế phát triển đô thị có tính liên ngành, liên lĩnh vực. Do đó, việc phối hợp giữa cơ quan tài chính, cơ quan quản lý đất đai, đầu tư, quy hoạch, xây dựng và các đơn vị liên quan có vai trò quan trọng nhằm bảo đảm chính sách được triển khai đồng bộ, hạn chế chồng chéo và nâng cao hiệu quả quản lý nhà nước."
      },
      {
        "loai": "h",
        "text": "6. Vai trò của tuổi trẻ ngành Tài chính – Chủ động nghiên cứu, sáng tạo trong thực thi chính sách"
      },
      {
        "loai": "p",
        "text": "Trong bối cảnh các cơ chế, chính sách phát triển đô thị ngày càng được đổi mới, đoàn viên, thanh niên ngành Tài chính không chỉ cần nắm vững quy định pháp luật mà còn phải chủ động nâng cao tư duy phân tích, đánh giá chính sách và khả năng vận dụng kiến thức chuyên môn vào thực tiễn công tác."
      },
      {
        "loai": "p",
        "text": "Mỗi đoàn viên cần quan tâm nghiên cứu các quy định mới về tài chính, ngân sách, đầu tư, quản lý tài sản công và đất đai; chủ động cập nhật các văn bản hướng dẫn thi hành; đồng thời phát huy tinh thần trách nhiệm, tính sáng tạo trong tham mưu, đề xuất giải pháp nâng cao hiệu quả quản lý và sử dụng nguồn lực nhà nước."
      },
      {
        "loai": "p",
        "text": "Bên cạnh đó, việc ứng dụng công nghệ thông tin, chuyển đổi số trong quản lý dữ liệu, theo dõi tiến độ dự án, tổng hợp và phân tích thông tin tài chính cũng là hướng đi cần được quan tâm, góp phần nâng cao chất lượng công việc và hiệu quả hoạt động của cơ quan nhà nước."
      },
      {
        "loai": "p",
        "text": "Tuổi trẻ ngành Tài chính cần phát huy vai trò tiên phong trong học tập, nghiên cứu, cải cách hành chính và đổi mới phương thức làm việc; biến kiến thức pháp luật thành hành động cụ thể, góp phần đưa các cơ chế, chính sách phát triển đô thị vào thực tiễn."
      },
      {
        "loai": "h",
        "text": "7. Thay lời kết"
      },
      {
        "loai": "p",
        "text": "Quản lý tài chính công hiệu quả chính là một trong những điều kiện quan trọng để hiện thực hóa mục tiêu phát triển đô thị hiện đại, văn minh và bền vững. Những cơ chế được quy định tại Luật Phát triển đô thị số 18/2026/QH16 không chỉ mở ra cơ hội huy động và sử dụng hiệu quả hơn các nguồn lực, mà còn đặt ra yêu cầu ngày càng cao đối với chất lượng tham mưu, năng lực quản lý và trách nhiệm thực thi công vụ."
      },
      {
        "loai": "p",
        "text": "Đối với tuổi trẻ ngành Tài chính, nghiên cứu Luật không dừng lại ở việc hiểu và ghi nhớ các quy định, mà quan trọng hơn là nhận diện được những vấn đề thực tiễn, chủ động đề xuất giải pháp và đóng góp sáng kiến trong quá trình thực hiện nhiệm vụ chuyên môn."
      },
      {
        "loai": "h4",
        "text": "Hiểu đúng chính sách – Vững vàng chuyên môn – Chủ động đổi mới – Đồng hành cùng Thành phố phát triển!"
      }
    ],
    "capNhat": "08/11/2026"
  },
  {
    "id": "tuoi-tre-tai-chinh-tien-phong",
    "trangThai": "da-duyet",
    "noiBat": false,
    "tieuDe": "Tuổi trẻ Tài chính với Luật Phát triển đô thị: Tiên phong trong nhận thức, sáng tạo trong hành động",
    "chuyenMuc": "Góc nhìn Tài chính · Diễn đàn Chi đoàn",
    "thoiGianDoc": "7–9 phút đọc",
    "nhan": "Diễn đàn Chi đoàn",
    "tomTat": "Tuổi trẻ ngành Tài chính chủ động nghiên cứu pháp luật, nâng cao năng lực chuyên môn, tiên phong chuyển đổi số và phát huy tinh thần sáng tạo trong thực thi công vụ.",
    "thongDiep": "Tuổi trẻ ngành Tài chính chủ động nghiên cứu pháp luật, nâng cao năng lực chuyên môn, tiên phong chuyển đổi số và phát huy tinh thần sáng tạo trong thực thi công vụ.",
    "nguon": "Nguồn: Luật Phát triển đô thị số 18/2026/QH16; các quy định trọng tâm tại Điều 8, Điều 30 đến Điều 32, Điều 33 đến Điều 39 và các quy định về trách nhiệm tổ chức thực hiện tại Chương IV.",
    "noiDung": [
      {
        "loai": "h",
        "text": "1. Luật Phát triển đô thị – Cơ hội mới và trách nhiệm mới đối với tuổi trẻ ngành Tài chính"
      },
      {
        "loai": "p",
        "text": "Trong tiến trình xây dựng và phát triển Thành phố Hồ Chí Minh trở thành đô thị hiện đại, năng động, có sức cạnh tranh cao, việc hoàn thiện thể chế, đổi mới phương thức quản lý và huy động hiệu quả các nguồn lực phát triển có ý nghĩa đặc biệt quan trọng."
      },
      {
        "loai": "p",
        "text": "Luật Phát triển đô thị số 18/2026/QH16 được Quốc hội thông qua ngày 24 tháng 8 năm 2026 là một dấu mốc quan trọng trong việc thiết lập các cơ chế, chính sách thúc đẩy phát triển đô thị đặc biệt và khu kinh tế đặc biệt. Luật đề cập đến nhiều lĩnh vực có tính liên ngành như tổ chức bộ máy, quy hoạch, đầu tư, tài chính, ngân sách, đất đai, khoa học công nghệ, môi trường và phát triển nguồn nhân lực."
      },
      {
        "loai": "p",
        "text": "Đối với ngành Tài chính, đây không chỉ là những quy định pháp luật cần được nghiên cứu, cập nhật mà còn là cơ sở quan trọng để nâng cao chất lượng công tác tham mưu, quản lý và sử dụng các nguồn lực phục vụ phát triển Thành phố."
      },
      {
        "loai": "p",
        "text": "Trong bối cảnh đó, tuổi trẻ ngành Tài chính cần nhận thức rõ vai trò và trách nhiệm của mình: không chỉ là người tiếp nhận, thực hiện các quy định mới mà còn phải là lực lượng tiên phong trong nghiên cứu, đề xuất sáng kiến, đổi mới phương thức làm việc và góp phần đưa chính sách vào thực tiễn."
      },
      {
        "loai": "h",
        "text": "2. Chủ động nghiên cứu pháp luật – Nền tảng của người cán bộ trẻ trong thời kỳ đổi mới"
      },
      {
        "loai": "p",
        "text": "Một trong những yêu cầu đầu tiên đối với đoàn viên, thanh niên là chủ động nghiên cứu, nắm vững các quy định của Luật Phát triển đô thị và các văn bản hướng dẫn có liên quan."
      },
      {
        "loai": "p",
        "text": "Luật có phạm vi điều chỉnh rộng, liên quan đến nhiều lĩnh vực quản lý nhà nước. Vì vậy, việc tìm hiểu không nên chỉ dừng lại ở việc đọc và ghi nhớ từng điều khoản mà cần hướng đến khả năng nhận diện mối liên hệ giữa các quy định pháp luật với chức năng, nhiệm vụ chuyên môn của từng phòng, ban, đơn vị."
      },
      {
        "loai": "p",
        "text": "Đối với đoàn viên công tác trong lĩnh vực tài chính, cần đặc biệt quan tâm đến các quy định về quản lý tài chính, ngân sách tại Điều 33; thẩm quyền và cơ chế đầu tư tại Điều 34; sự tham gia của khu vực kinh tế tư nhân tại Điều 35; thu hút nhà đầu tư chiến lược tại Điều 36; quản lý, sử dụng tài nguyên tại Điều 37; cũng như các cơ chế ưu đãi, hỗ trợ đầu tư và phát triển khu kinh tế đặc biệt."
      },
      {
        "loai": "p",
        "text": "Việc nghiên cứu có hệ thống sẽ giúp mỗi cán bộ trẻ hiểu rõ hơn cơ sở pháp lý của nhiệm vụ được giao, nâng cao khả năng tham mưu và hạn chế những sai sót trong quá trình xử lý công việc."
      },
      {
        "loai": "p",
        "text": "Đặc biệt, mỗi đoàn viên cần hình thành thói quen tự học, tự cập nhật văn bản mới, chủ động trao đổi những vấn đề chưa rõ và chia sẻ kiến thức pháp luật với đồng nghiệp. Đây chính là nền tảng để xây dựng đội ngũ cán bộ trẻ có bản lĩnh chính trị, vững chuyên môn và thích ứng với yêu cầu đổi mới của nền hành chính."
      },
      {
        "loai": "h",
        "text": "3. Phát huy năng lực chuyên môn – Biến quy định pháp luật thành giải pháp thực tiễn"
      },
      {
        "loai": "p",
        "text": "Giá trị của một chính sách không chỉ nằm ở những quy định được ban hành mà còn thể hiện ở hiệu quả tổ chức thực hiện."
      },
      {
        "loai": "p",
        "text": "Luật Phát triển đô thị đặt ra nhiều cơ chế mới về huy động nguồn lực, quản lý ngân sách, đầu tư, khai thác tài sản công và phát triển kinh tế. Điều này đòi hỏi đội ngũ cán bộ ngành Tài chính phải không ngừng nâng cao năng lực phân tích, đánh giá và tham mưu chính sách."
      },
      {
        "loai": "p",
        "text": "Tuổi trẻ ngành Tài chính có thể phát huy vai trò thông qua những nhiệm vụ cụ thể:"
      },
      {
        "loai": "h4",
        "text": "Thứ nhất, nâng cao chất lượng tham mưu về tài chính, ngân sách."
      },
      {
        "loai": "p",
        "text": "Chủ động nghiên cứu các cơ chế quản lý ngân sách, đánh giá khả năng cân đối nguồn lực, phân tích tác động của chính sách đến thu, chi ngân sách và đề xuất giải pháp sử dụng nguồn lực hiệu quả, phù hợp với mục tiêu phát triển Thành phố."
      },
      {
        "loai": "h4",
        "text": "Thứ hai, nâng cao năng lực phân tích các cơ chế đầu tư."
      },
      {
        "loai": "p",
        "text": "Nghiên cứu các quy định về đầu tư công, hợp tác công tư (PPP), thu hút nhà đầu tư chiến lược; chú trọng đánh giá hiệu quả kinh tế - xã hội, khả năng huy động vốn và các rủi ro tài chính trong quá trình triển khai dự án."
      },
      {
        "loai": "h4",
        "text": "Thứ ba, nâng cao hiệu quả quản lý tài sản công và nguồn lực đất đai."
      },
      {
        "loai": "p",
        "text": "Chủ động nghiên cứu các quy định về quản lý, sử dụng tài sản công, đất đai và khai thác nguồn lực phục vụ phát triển đô thị; góp phần bảo đảm việc sử dụng nguồn lực nhà nước đúng mục đích, tiết kiệm và hiệu quả."
      },
      {
        "loai": "h4",
        "text": "Thứ tư, tăng cường phối hợp liên ngành."
      },
      {
        "loai": "p",
        "text": "Phát triển đô thị là nhiệm vụ có tính tổng thể, đòi hỏi sự phối hợp giữa nhiều cơ quan, đơn vị. Cán bộ trẻ cần chủ động trao đổi chuyên môn, phối hợp xử lý công việc và chia sẻ thông tin để nâng cao chất lượng tham mưu, hạn chế tình trạng xử lý công việc riêng lẻ, thiếu đồng bộ."
      },
      {
        "loai": "h",
        "text": "4. Tiên phong chuyển đổi số – Đổi mới phương thức làm việc trong thực thi công vụ"
      },
      {
        "loai": "p",
        "text": "Một trong những yêu cầu quan trọng trong xây dựng đô thị hiện đại là ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số."
      },
      {
        "loai": "p",
        "text": "Luật Phát triển đô thị đã dành các quy định về phát triển khoa học công nghệ, đổi mới sáng tạo, thử nghiệm có kiểm soát và phát triển khu công nghệ cao. Đây là những định hướng có ý nghĩa đối với quá trình đổi mới phương thức quản lý nhà nước và nâng cao chất lượng hoạt động của đội ngũ cán bộ, công chức."
      },
      {
        "loai": "p",
        "text": "Với lợi thế về khả năng tiếp cận công nghệ và tinh thần sáng tạo, đoàn viên thanh niên ngành Tài chính cần phát huy vai trò tiên phong trong ứng dụng công nghệ thông tin vào công việc chuyên môn."
      },
      {
        "loai": "p",
        "text": "Một số hướng triển khai thiết thực có thể kể đến:"
      },
      {
        "loai": "ul",
        "list": [
          "Số hóa, hệ thống hóa tài liệu và dữ liệu phục vụ công tác tham mưu.",
          "Ứng dụng công cụ phân tích dữ liệu trong tổng hợp, đánh giá tình hình tài chính, ngân sách và đầu tư.",
          "Xây dựng các bảng theo dõi tiến độ xử lý hồ sơ, nhiệm vụ và dự án.",
          "Từng bước ứng dụng các công cụ số nhằm rút ngắn thời gian xử lý công việc, hạn chế thao tác thủ công.",
          "Chia sẻ kinh nghiệm, kỹ năng sử dụng công nghệ và các phương pháp làm việc mới trong cơ quan."
        ]
      },
      {
        "loai": "p",
        "text": "Chuyển đổi số không nhất thiết phải bắt đầu từ những dự án lớn hay giải pháp công nghệ phức tạp. Đôi khi, một sáng kiến nhỏ giúp giảm thời gian tổng hợp số liệu, một quy trình được chuẩn hóa hay một công cụ quản lý dữ liệu hiệu quả cũng có thể tạo ra những thay đổi tích cực trong công việc hằng ngày."
      },
      {
        "loai": "h",
        "text": "5. Phát huy vai trò xung kích của Đoàn Thanh niên – Đưa pháp luật đến gần hơn với đoàn viên"
      },
      {
        "loai": "p",
        "text": "Bên cạnh việc nâng cao năng lực chuyên môn của từng cá nhân, tổ chức Đoàn cần phát huy vai trò tập hợp, định hướng và tạo môi trường để đoàn viên tham gia nghiên cứu, trao đổi, đề xuất sáng kiến liên quan đến Luật Phát triển đô thị."
      },
      {
        "loai": "p",
        "text": "Công tác tuyên truyền pháp luật cần được đổi mới theo hướng dễ tiếp cận, có tính tương tác và gắn với thực tiễn công tác."
      },
      {
        "loai": "p",
        "text": "Theo đó, Đoàn Thanh niên có thể triển khai một số hoạt động cụ thể:"
      },
      {
        "loai": "h4",
        "text": "Một là, xây dựng Không gian số Tuổi trẻ Tài chính với Luật Phát triển đô thị."
      },
      {
        "loai": "p",
        "text": "Xây dựng nền tảng trực tuyến tập hợp nội dung tóm tắt Luật, infographic, tài liệu tham khảo và các bài viết phân tích chính sách, giúp đoàn viên dễ dàng tra cứu, tìm hiểu và cập nhật kiến thức pháp luật."
      },
      {
        "loai": "h4",
        "text": "Hai là, tổ chức diễn đàn trao đổi và phản biện chính sách."
      },
      {
        "loai": "p",
        "text": "Định kỳ lựa chọn những vấn đề thiết thực như quản lý tài chính công, huy động nguồn lực đầu tư, khai thác quỹ đất, phát triển TOD, thu hút nhà đầu tư chiến lược để đoàn viên nghiên cứu, trao đổi và đề xuất giải pháp từ góc nhìn chuyên môn."
      },
      {
        "loai": "h4",
        "text": "Ba là, phát động phong trào sáng kiến, hiến kế trong đoàn viên."
      },
      {
        "loai": "p",
        "text": "Khuyến khích đoàn viên đề xuất các giải pháp cải cách hành chính, ứng dụng công nghệ, nâng cao hiệu quả quản lý tài chính công và cải thiện chất lượng tham mưu chính sách."
      },
      {
        "loai": "h4",
        "text": "Bốn là, xây dựng đội ngũ tuyên truyền viên pháp luật trẻ."
      },
      {
        "loai": "p",
        "text": "Phát huy vai trò của đoàn viên có kiến thức chuyên môn trong việc phổ biến những quy định mới, giải thích các vấn đề pháp lý và chia sẻ kinh nghiệm vận dụng pháp luật trong công việc."
      },
      {
        "loai": "p",
        "text": "Thông qua những hoạt động này, công tác Đoàn không chỉ dừng lại ở tuyên truyền, phổ biến kiến thức mà còn góp phần xây dựng môi trường học tập, nghiên cứu và sáng tạo trong đội ngũ cán bộ trẻ."
      },
      {
        "loai": "h",
        "text": "6. Trách nhiệm của mỗi đoàn viên – Bắt đầu từ những hành động cụ thể"
      },
      {
        "loai": "p",
        "text": "Để phát huy vai trò của tuổi trẻ trong thực hiện Luật Phát triển đô thị, điều quan trọng là phải chuyển hóa nhận thức thành hành động cụ thể trong từng vị trí công tác."
      },
      {
        "loai": "p",
        "text": "Mỗi đoàn viên cần chủ động thực hiện tốt một số nhiệm vụ:"
      },
      {
        "loai": "ul",
        "list": [
          "Chủ động học tập: Nắm vững các quy định pháp luật mới, thường xuyên cập nhật văn bản hướng dẫn và kiến thức chuyên môn.",
          "Trách nhiệm trong công việc: Thực hiện nhiệm vụ đúng quy định, nâng cao chất lượng tham mưu và bảo đảm tiến độ xử lý công việc.",
          "Sáng tạo trong hành động: Mạnh dạn đề xuất sáng kiến, ứng dụng công nghệ và cải tiến phương pháp làm việc.",
          "Tích cực phối hợp: Chủ động chia sẻ kiến thức, kinh nghiệm và phối hợp với đồng nghiệp trong giải quyết nhiệm vụ liên ngành.",
          "Tiên phong trong hoạt động Đoàn: Tích cực tham gia các diễn đàn nghiên cứu, tuyên truyền pháp luật và hoạt động hiến kế chính sách."
        ]
      },
      {
        "loai": "p",
        "text": "Đặc biệt, mỗi cán bộ trẻ cần xây dựng tư duy làm việc chủ động, không ngừng học hỏi, dám đề xuất và dám chịu trách nhiệm trong phạm vi nhiệm vụ được giao."
      },
      {
        "loai": "h",
        "text": "7. Tuổi trẻ Tài chính – Đồng hành kiến tạo tương lai đô thị"
      },
      {
        "loai": "p",
        "text": "Luật Phát triển đô thị số 18/2026/QH16 mở ra những cơ hội mới cho quá trình đổi mới cơ chế quản lý và thúc đẩy phát triển Thành phố. Tuy nhiên, để các cơ chế, chính sách thực sự đi vào cuộc sống, bên cạnh khuôn khổ pháp lý hoàn thiện cần có đội ngũ cán bộ đủ năng lực, trách nhiệm và tinh thần đổi mới trong tổ chức thực hiện."
      },
      {
        "loai": "p",
        "text": "Với tuổi trẻ ngành Tài chính, trách nhiệm ấy bắt đầu từ việc chủ động nghiên cứu pháp luật, nâng cao trình độ chuyên môn, đổi mới phương thức làm việc và tích cực đóng góp sáng kiến trong thực tiễn công tác."
      },
      {
        "loai": "p",
        "text": "Mỗi đoàn viên không chỉ là người thực hiện nhiệm vụ chuyên môn mà còn có thể trở thành một nhân tố tích cực trong quá trình đổi mới, cải cách và nâng cao hiệu quả quản lý nhà nước."
      },
      {
        "loai": "p",
        "text": "Phát huy truyền thống xung kích, sáng tạo của thanh niên, tuổi trẻ Sở Tài chính cần tiếp tục khẳng định vai trò tiên phong trong học tập, nghiên cứu, chuyển đổi số và thực thi công vụ; góp phần xây dựng đội ngũ cán bộ trẻ bản lĩnh, trách nhiệm, chuyên nghiệp, đáp ứng yêu cầu phát triển Thành phố trong giai đoạn mới."
      },
      {
        "loai": "h4",
        "text": "HIỂU LUẬT ĐỂ HÀNH ĐỘNG – VỮNG CHUYÊN MÔN ĐỂ CỐNG HIẾN – TIÊN PHONG ĐỔI MỚI VÌ THÀNH PHỐ PHÁT TRIỂN!"
      }
    ],
    "capNhat": "08/11/2026"
  }
];
