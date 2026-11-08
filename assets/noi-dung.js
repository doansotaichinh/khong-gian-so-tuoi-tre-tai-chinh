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
    nguon: "Áp dụng đối với thành phố Hà Nội theo quy định tại Luật Phát triển đô thị",
    capNhat: "07/11/2026",
    lienKet: [
      { nhan: "Tra cứu tại Cổng Thông tin điện tử Chính phủ", url: "https://chinhphu.vn" }
    ]
  },
  {
    loai: "huong-dan",
    ma: "HD",
    nhanLoai: "Tài liệu hướng dẫn",
    tieuDe: "Tài liệu triển khai và văn bản hướng dẫn thi hành Luật",
    nguon: "Cơ quan có thẩm quyền · Cập nhật khi có văn bản mới",
    capNhat: "07/11/2026",
    lienKet: []
  },
  {
    loai: "chuyen-de",
    ma: "CĐ",
    nhanLoai: "Tài liệu chuyên đề",
    tieuDe: "Chuyên đề tài chính công và nguồn lực phát triển đô thị",
    nguon: "Tài liệu chuyên môn đã được duyệt",
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
