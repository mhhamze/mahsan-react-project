پروژه جستجوی پیشرفته و نمایش نتایج

توضیح پروژه:
- صفحه‌ای داشته باشیم که کاربر بتواند در آن با مشخص نمودن  query جستجو و همچنین فیلترهای مد نظر خود، به یک  API درخواست داده، جستجو کرده و نتایج در قالب جدول به او نمایش داده شود.
  
شرایط انجام:
- از  React و Typescript برای انجام پروژه استفاده شود.
- یک فیلد برای مشخص کردن  search query و یک فیلد  Drop down شامل لیستی از فیلترهایی که کاربر می‌تواند قرار دهد را داشته باشیم:
    
![1](https://github.com/mhhamze/mahsan-react-project/assets/41363559/b8ed98c1-004f-4337-9b81-92adcb1f0807)
انواع فیلترهای رشته‌ای، عددی،  select و تاریخ قابل اضافه کردن باشد:

![2](https://github.com/mhhamze/mahsan-react-project/assets/41363559/748341dc-2eb3-4bc0-9737-e75cea017949)
- با انتخاب هر یک از این فیلترها، فیلتری به لیست فیلترها در سمت چپ صفحه اضافه شود که بتوان مقدار آن را مشخص کرد. با زیاد شدن تعداد فیلترها، لیست فیلترها اسکرول بخورد.
- فیلتر  String و  Date فقط به صورت Exact (تک مقدار ورودی) باشد.
- فیلتر  Number را بتوان طوری تنظیم کرد که هم  Exact باشد و هم بتواند به صورت (between)Range باشد.
  
