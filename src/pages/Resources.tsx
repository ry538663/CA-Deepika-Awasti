import { BookOpen, TrendingUp, AlertCircle, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Resources() {
  const articles = [
    {
      title: "How to Prepare a Project Report for Bank Loan",
      category: "Financial Planning Tips",
      date: "Aug 15, 2026",
      readTime: "5 min read"
    },
    {
      title: "New GST Compliance Rules for 2026",
      category: "Compliance Alerts",
      date: "Aug 10, 2026",
      readTime: "4 min read"
    },
    {
      title: "Capital Gains Tax Planning Guide",
      category: "Tax Updates",
      date: "Aug 02, 2026",
      readTime: "7 min read"
    },
    {
      title: "MSME Registration Benefits & Process",
      category: "Regulatory Changes",
      date: "Jul 28, 2026",
      readTime: "6 min read"
    }
  ];

  const categories = [
    { name: "Tax Updates", icon: <TrendingUp size={20} /> },
    { name: "Compliance Alerts", icon: <AlertCircle size={20} /> },
    { name: "Financial Planning Tips", icon: <Briefcase size={20} /> },
    { name: "Regulatory Changes", icon: <BookOpen size={20} /> }
  ];

  return (
    <div className="pt-24 min-h-screen bg-warmwhite pb-20">
      <section className="py-16 md:py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Knowledge & Insights</h1>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest in taxation, compliance, and financial planning.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-navy mb-8 border-b border-border pb-4">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow group cursor-pointer flex flex-col h-full">
                  <div className="h-48 bg-navy/5 relative overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${1554224155 - idx}?auto=format&fit=crop&w=600&q=80`} alt="Article Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-navy">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{article.title}</h3>
                    <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
              <h3 className="text-lg font-bold text-navy mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <a href="#" className="flex items-center gap-3 text-navy-secondary hover:text-gold transition-colors py-2 group">
                      <span className="text-gold/70 group-hover:text-gold transition-colors">{cat.icon}</span>
                      <span className="font-medium text-sm">{cat.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy rounded-2xl p-6 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-lg font-bold mb-3 relative z-10">Need Expert Advice?</h3>
              <p className="text-white/80 text-sm mb-6 relative z-10">Get personalized consultation for your specific financial and compliance needs.</p>
              <Button asChild className="w-full bg-gold hover:bg-gold/90 text-navy relative z-10 font-semibold">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
