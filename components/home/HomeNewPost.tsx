export default function HomeNewPost() {
  return (
    <section className="bg-c-gray custom-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
      <h1 className="custom-h1">최신 포스트</h1>
      <div className="bg-[hsl(var(--chart-1))] sm:col-span-2 lg:col-span-6 h-48">
        1
      </div>
      <div className="bg-[hsl(var(--chart-2))] lg:col-span-3 h-48">2</div>
      <div className="bg-[hsl(var(--chart-3))] lg:col-span-3 h-48">3</div>
      <div className="bg-[hsl(var(--chart-4))] lg:col-span-3 h-48">4</div>
      <div className="bg-[hsl(var(--chart-5))] lg:col-span-3 h-48">5</div>
      <div className="bg-[hsl(var(--primary))] lg:col-span-2 h-36">6</div>
      <div className="bg-[hsl(var(--secondary))] lg:col-span-2 h-36">7</div>
      <div className="bg-[hsl(var(--muted))] lg:col-span-2 h-36">8</div>
      <div className="bg-[hsl(var(--accent))] lg:col-span-2 h-36">9</div>
      <div className="bg-[hsl(var(--destructive))] lg:col-span-2 h-36">10</div>
      <div className="bg-[hsl(var(--border))] lg:col-span-2 h-36">11</div>
    </section>
  );
}
