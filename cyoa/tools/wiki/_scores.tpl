{%- macro show_requirement(req) -%}
{{ objects[req.reqId].title }}
{%- endmacro -%}

<div class="scores">
{% for score in obj.scores -%}
<div class="score">
{{ score.beforeText }} {{ score.value|int|abs }} {{ score.afterText }}
{%- if score.requireds %} (
{%- for required in score.requireds -%}
{{ show_requirement(required) }}
{%- endfor -%}
){%- endif %}
</div>
{% endfor %}
</div>