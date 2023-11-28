{% if config.section.group_by_row %}
{% for row in page_rows -%}
<div class="section-row">
<h2>{{ row.row.title }}</h2>
<div class="section-grid col-{{ config.section.columns }}">
{% for page in row.objects -%}
<div class="cell">
{{ '{{:' }}{{ page.name }}{{ '}}' }}
</div>
{% endfor -%}
</div>
</div>
{% endfor -%}
{% else %}
<div class="section-grid col-{{ config.section.columns }}">
{% for row in page_rows -%}
{% for page in row.objects -%}
<div class="cell">
{{ '{{:' + page.name + '}}' }}
</div>
{% endfor -%}
{% endfor -%}
</div>
{% endif %}
