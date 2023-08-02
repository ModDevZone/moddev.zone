<script>
  import "../app.postcss";
  const year = new Date().getFullYear();
  const copyrightStartYear = 2016;
	const copyrightYear = year === copyrightStartYear ? year : `${copyrightStartYear}-${year}`;
  const copyrightName = "Mod Dev Zone";
</script>

<main class="my-auto flex flex-grow">
  <slot />
</main>

<footer class="flex mt-auto bg-slate-600 text-slate-300">
  <p class="self-center p-1 m-auto text-sm">
    Copyright &COPY; {copyrightYear} {copyrightName}, All rights reserved.
  </p>
</footer>
