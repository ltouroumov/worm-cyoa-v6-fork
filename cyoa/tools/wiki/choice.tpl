<onlyinclude>
<div class="choice">
== [[{{ page_name }}|{{ obj.title }}]] ==
{% if obj.imageLink -%}
<htmltag tagname="img" src="{{ obj.imageLink }}" width="100%" />
{% endif -%}
{{ obj.text }}
</div>
</onlyinclude>