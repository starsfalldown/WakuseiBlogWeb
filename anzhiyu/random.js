var posts=["2025/04/03/2025-4-3-n5-grammer-easy-system/","2025/02/03/N1～N5-Certification Standards-Japanese Language Proficiency Test-JLPT/","2022/02/01/lmi all MIUI13 development version internal test flash packages before the Spring Festival/","2025/02/06/The most comprehensive report on Trump's tariff plan in the Simplified Chinese Internet might be here/","2022/01/31/Some random talks about 2022/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };