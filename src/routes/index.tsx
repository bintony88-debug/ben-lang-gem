import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Maximize2,
  Route as RouteIcon,
  Building2,
  BedDouble,
  MapPin,
  ShoppingBag,
  GraduationCap,
  Plane,
  Store,
  ShieldCheck,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import house1 from "@/assets/house-1.jpg";
import house2 from "@/assets/house-2.jpg";
import house3 from "@/assets/house-3.jpg";
import house4 from "@/assets/house-4.jpg";
import house5 from "@/assets/house-5.jpg";
import house6 from "@/assets/house-6.jpg";
import house7 from "@/assets/house-7.jpg";
import house8 from "@/assets/house-8.jpg";
import house9 from "@/assets/house-9.jpg";
import house10 from "@/assets/house-10.jpg";
import logo from "@/assets/southhomes-logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Số 63 Bến Láng — Tuyệt Phẩm Nhà Phố Kinh Doanh 2026 | Lê Hồng Phong" },
      {
        name: "description",
        content:
          "Nhà phố 4 tầng mặt đường 15m, tuyến 2 Lê Hồng Phong, Hải Phòng. 60m² – 4 phòng ngủ – pháp lý sổ đỏ. Vị trí kinh doanh đắc địa.",
      },
      { property: "og:title", content: "Số 63 Bến Láng — Tuyệt Phẩm Nhà Phố Kinh Doanh 2026" },
      {
        property: "og:description",
        content: "Nhà phố 4 tầng, mặt đường 15m, tuyến 2 Lê Hồng Phong, Hải Phòng.",
      },
      { property: "og:image", content: house1 },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: house1 },
    ],
  }),
  component: Index,
});

const PHONE = "0868 612 719";

const specs = [
  { icon: Maximize2, label: "Diện tích", value: "60 m²" },
  { icon: RouteIcon, label: "Mặt đường", value: "15 m" },
  { icon: Building2, label: "Quy mô", value: "4 Tầng" },
  { icon: BedDouble, label: "Phòng ngủ", value: "4 Phòng" },
];

const gallery = [
  { src: house1, caption: "Mặt tiền — Tuyến 2 Lê Hồng Phong" },
  { src: house2, caption: "Trục đường 15m — Tầm nhìn thoáng đãng" },
  { src: house3, caption: "Phòng khách & gara liền mạch" },
  { src: house9, caption: "Cầu thang đá granite — gỗ óc chó" },
  { src: house4, caption: "Bếp hiện đại — kính cường lực" },
  { src: house5, caption: "Phòng ngủ master — sàn gỗ ấm" },
  { src: house6, caption: "Phòng ngủ phụ — tủ âm tường" },
  { src: house7, caption: "Phòng ngủ thoáng sáng" },
  { src: house8, caption: "WC cao cấp — thiết bị nhập khẩu" },
  { src: house10, caption: "Sân thượng — không gian xanh" },
];

const amenities = [
  { icon: ShoppingBag, label: "Chợ Đôn", distance: "300 m" },
  { icon: GraduationCap, label: "Trường học các cấp", distance: "500 m" },
  { icon: Store, label: "BigC / Go! Hải Phòng", distance: "1.2 km" },
  { icon: Plane, label: "Sân bay Cát Bi", distance: "4 km" },
];

function Index() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Vui lòng nhập Họ tên và Số điện thoại");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Đã gửi! Chuyên viên sẽ liên hệ trong 5 phút.");
      setForm({ name: "", phone: "", message: "" });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="South Homes" className="h-10 w-10 rounded-lg object-cover" />
            <div className="leading-tight">
              <div className="font-display text-base font-semibold tracking-tight">South Homes</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Số 63 Bến Láng</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#specs" className="hover:text-foreground transition-smooth">Thông số</a>
            <a href="#gallery" className="hover:text-foreground transition-smooth">Thư viện</a>
            <a href="#location" className="hover:text-foreground transition-smooth">Vị trí</a>
            <a href="#contact" className="hover:text-foreground transition-smooth">Liên hệ</a>
          </nav>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal bg-gradient-gold px-4 py-2 rounded-full shadow-gold transition-smooth hover:scale-105"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={house1}
          alt="Mặt tiền nhà phố Số 63 Bến Láng, tuyến 2 Lê Hồng Phong"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-charcoal/40 backdrop-blur-sm text-gold text-xs tracking-[0.25em] uppercase mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Tuyệt phẩm 2026
            </div>
            <h1 className="text-ivory font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
              Số 63 Bến Láng
              <span className="block text-gradient-gold mt-2">Tuyến 2 Lê Hồng Phong</span>
            </h1>
            <p className="mt-6 text-ivory/85 text-lg md:text-xl max-w-2xl leading-relaxed">
              Tuyệt phẩm nhà phố kinh doanh — 4 tầng, mặt đường 15m, vị trí huyết mạch trung tâm Hải Phòng.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-gold text-charcoal hover:opacity-90 shadow-gold rounded-full px-8 h-14 text-base font-semibold"
              >
                <a href="#contact">
                  Nhận báo giá & Xem nhà ngay <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-base bg-transparent border-ivory/40 text-ivory hover:bg-ivory/10 hover:text-ivory"
              >
                <a href="#gallery">Khám phá không gian</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Thông số vàng</p>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                Tỉ lệ hoàn hảo cho<br />
                <span className="text-gradient-gold">an cư & kinh doanh.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Từng centimet được tính toán kỹ lưỡng — từ chiều ngang mặt tiền đến chiều cao tầng,
                tạo nên không gian sống thoáng đãng và mặt bằng kinh doanh đắc địa.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-5">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="group p-6 rounded-2xl border border-border bg-card hover:border-gold/60 hover:shadow-luxe transition-smooth"
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold mb-4 group-hover:scale-110 transition-smooth">
                      <Icon className="h-6 w-6 text-charcoal" />
                    </div>
                    <div className="text-3xl font-display font-semibold">{value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={house3}
                alt="Phòng khách rộng rãi với cầu thang kính sang trọng"
                className="rounded-3xl shadow-luxe w-full h-[560px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-gold rounded-2xl px-6 py-4 shadow-gold hidden md:block">
                <div className="text-charcoal text-sm font-medium">Trần cao 3.6m</div>
                <div className="text-charcoal/70 text-xs">Sàn marble — gỗ óc chó</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Cảm xúc sống</p>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Hành trình qua từng<br />không gian sống.
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {gallery.map((item, i) => {
              const layouts = [
                "col-span-12 md:col-span-8 h-[400px] md:h-[520px]",
                "col-span-12 md:col-span-4 h-[400px] md:h-[520px]",
                "col-span-6 md:col-span-4 h-[280px] md:h-[360px]",
                "col-span-6 md:col-span-4 h-[280px] md:h-[360px]",
                "col-span-12 md:col-span-4 h-[280px] md:h-[360px]",
                "col-span-6 md:col-span-3 h-[260px] md:h-[320px]",
                "col-span-6 md:col-span-3 h-[260px] md:h-[320px]",
                "col-span-6 md:col-span-3 h-[260px] md:h-[320px]",
                "col-span-6 md:col-span-3 h-[260px] md:h-[320px]",
                "col-span-12 h-[400px] md:h-[520px]",
              ];
              return (
                <figure
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl shadow-luxe ${layouts[i]}`}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-charcoal/90 to-transparent text-ivory text-sm font-medium">
                    {item.caption}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Vị trí & Tiện ích</p>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                Trung tâm của<br />
                <span className="text-gradient-gold">mọi kết nối.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Tọa lạc tại tuyến 2 Lê Hồng Phong — trục huyết mạch của Hải Phòng,
                kết nối sân bay, trung tâm thương mại và các trường học hàng đầu chỉ trong vài phút di chuyển.
              </p>

              <div className="mt-10 space-y-3">
                {amenities.map(({ icon: Icon, label, distance }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between p-5 rounded-xl border border-border bg-card hover:border-gold/60 transition-smooth"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <span className="font-medium">{label}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{distance}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-luxe h-[560px] border border-border">
              <iframe
                title="Bản đồ Số 63 Bến Láng, Lê Hồng Phong, Hải Phòng"
                src="https://www.google.com/maps?q=Ben+Lang,+Le+Hong+Phong,+Hai+Phong&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-5 left-5 bg-card/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-luxe border border-border flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs text-muted-foreground">Địa chỉ</div>
                  <div className="font-semibold text-sm">Số 63 Bến Láng, Hải Phòng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL & CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-gradient-dark text-ivory relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "var(--gradient-gold)", opacity: 0.15, filter: "blur(80px)" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Cam kết pháp lý</p>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-ivory">
                Sổ đỏ chính chủ.<br />
                <span className="text-gradient-gold">Giao dịch minh bạch.</span>
              </h2>
              <p className="mt-6 text-ivory/75 text-lg leading-relaxed">
                Pháp lý hoàn chỉnh, sẵn sàng công chứng sang tên trong ngày.
                Hỗ trợ vay ngân hàng đến 70% giá trị tài sản với lãi suất ưu đãi.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { icon: ShieldCheck, label: "Sổ đỏ chính chủ" },
                  { icon: ShieldCheck, label: "Công chứng nhanh" },
                  { icon: ShieldCheck, label: "Hỗ trợ vay 70%" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="p-5 rounded-2xl border border-ivory/15 bg-ivory/5 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-gold mb-3" />
                    <div className="text-sm font-medium text-ivory">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-3 text-ivory/85">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gold" />
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-gold transition-smooth">
                    {PHONE}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gold" />
                  <a href="mailto:ceosouthhome@gmail.com" className="hover:text-gold transition-smooth">ceosouthhome@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span>Số 63 Bến Láng, Lê Hồng Phong, Hải Phòng</span>
                </div>
              </div>
            </div>

            <div className="bg-ivory text-charcoal rounded-3xl p-8 md:p-10 shadow-luxe">
              <h3 className="text-2xl font-display font-semibold">Đăng ký xem nhà</h3>
              <p className="text-muted-foreground mt-2 text-sm">Chuyên viên sẽ liên hệ trong vòng 5 phút.</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium">Họ và tên *</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="mt-2 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Số điện thoại *</label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="09xx xxx xxx"
                    type="tel"
                    className="mt-2 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Lời nhắn</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tôi muốn xem nhà vào cuối tuần..."
                    rows={4}
                    className="mt-2 rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-xl bg-gradient-gold text-charcoal hover:opacity-90 shadow-gold text-base font-semibold"
                >
                  {loading ? "Đang gửi..." : "Nhận báo giá & Xem nhà ngay"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Thông tin của bạn được bảo mật tuyệt đối.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-ivory/70 py-10 border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <img src={logo} alt="South Homes" className="h-8 w-8 rounded-md object-cover" />
            <span className="font-display text-ivory">South Homes — Số 63 Bến Láng</span>
          </div>
          <div>© 2026 — Tuyệt phẩm nhà phố Lê Hồng Phong, Hải Phòng.</div>
        </div>
      </footer>
    </div>
  );
}
