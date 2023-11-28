<div class="index-grid">
{% for page in pages -%}
  <div class="index-card">
    <h2>[[{{ page.title }}|{{ page.title | last_title_part }}]]</h2>
  </div>
{% endfor %}
</div>