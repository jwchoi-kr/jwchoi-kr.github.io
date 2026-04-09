export default function Home() {
  return (
    <section className="mx-auto">
      {/* 자기소개 섹션 */}
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold">최재웅 (JWCHOI)</h1>
        <p className="text-lg">TBD</p>
      </div>

      {/* 포스트 목록 섹션 (나중에 데이터 바인딩 예정) */}
      <div id="recent-posts">
        <h2 className="mb-6 text-xl font-semibold">Recent Posts</h2>
        <div className="flex flex-col gap-8">
          {/* 글 목록이 들어올 자리 */}
          <p className="">아직 작성된 글이 없습니다.</p>
        </div>
      </div>
    </section>
  );
}
