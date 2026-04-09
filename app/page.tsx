export default function Home() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      {/* 자기소개 섹션 */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">
          최재웅 (JWCHOI)
        </h1>
        <p className="text-lg text-muted">
          프론트엔드 개발자 블로그입니다. 공부한 내용을 기록하고 공유합니다.
        </p>
      </div>

      {/* 포스트 목록 섹션 (나중에 데이터 바인딩 예정) */}
      <div id="recent-posts">
        <h2 className="text-xl font-semibold mb-6">Recent Posts</h2>
        <div className="flex flex-col gap-8">
          {/* 글 목록이 들어올 자리 */}
          <p className="text-muted">아직 작성된 글이 없습니다.</p>
        </div>
      </div>
    </section>
  );
}
