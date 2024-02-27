{%- macro show_requirement(req) -%}
{%- if req.type =='id' -%}
{{ objects[req.reqId].title | d('Unknown') }}
{%- elif req.type == 'or' -%}
{%- for orReq in req.orRequired -%}
{{ objects[orReq.req].title | d('Unknown') }},
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