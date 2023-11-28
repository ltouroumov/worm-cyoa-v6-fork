<div style="display: grid; grid-template-columns: {{ '1fr ' * config.section.columns }}; grid-auto-rows: auto; gap: 2em;">
{% for page in pages %}
    {{ '{{:' }}{{ page.name }}{{ '}}' }}
{% endfor %}
</div>