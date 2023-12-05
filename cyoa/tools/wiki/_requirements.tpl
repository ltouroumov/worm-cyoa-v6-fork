{%- macro show_requirement(req) -%}
{%- if req.type =='id' -%}
{{ objects[req.reqId].title }}
{%- elif req.type == 'or' -%}
{%- for orReq in req.orRequired -%}
{{ objects[orReq.req].title }},
{%- endfor -%}
{%- endif -%}
{%- endmacro -%}

<div class="requirements">
{% for req in obj.requireds -%}
<div class="requirement">
{{ req.beforeText }} {{ show_requirement(req) }} {{ req.afterText }}
</div>
{% endfor -%}
</div>