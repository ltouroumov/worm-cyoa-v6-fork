{% if config.mode in ('section', 'combined') -%}
  {% if config.section.group_by_row -%}
    {% for row in page_rows -%}
      <div class="section-row">
        {% if row.id not in config.section.skip_row_title -%}
          <h2>{{ row.row.title }}</h2>
        {% endif -%}
        <div class="section-grid col-{{ config.section.columns }}">
          {% for page in row.objects -%}
            <div class="cell">
              {{ '{{:' }}{{ page.name }}{{ '}}' }}
            </div>
          {% endfor -%}
        </div>
      </div>
    {% endfor -%}
  {% else -%}
    <div class="section-grid col-{{ config.section.columns }}">
      {% for row in page_rows -%}
        {% for page in row.objects -%}
          <div class="cell">
            {{ '{{:' + page.name + '}}' }}
          </div>
        {% endfor -%}
      {% endfor -%}
    </div>
  {% endif -%}
{% endif -%}
{% if config.mode in ('index', 'combined') -%}
  {% if config.mode == 'combined' -%}
    == Sub-Sections ==
  {% endif -%}
  {% if config.index.depth == 1 -%}
    <div class="index-grid">
      {% for page in pages -%}
        <div class="index-card">
          <h2>[[{{ page.title }}|{{ page.title | last_title_part }}]]</h2>
        </div>
      {% endfor -%}
    </div>
  {% elif config.index.depth == 2 -%}
    {% for level1 in pages | child_pages_of(page_path) -%}
      {% set level2_pages = pages | child_pages_of(level1.title) -%}
      {% if level2_pages | length == 0 -%}
        {% if config.mode == 'combined' -%}
          <h3>[[{{ level1.title }}|{{ level1.title | last_title_part }}]]</h3>
        {% else -%}
          <h2>[[{{ level1.title }}|{{ level1.title | last_title_part }}]]</h2>
        {% endif -%}
      {% else -%}
        {% if config.mode == 'combined' -%}
          <h3>{{ level1.title | last_title_part }}</h3>
        {% else -%}
          <h2>{{ level1.title | last_title_part }}</h2>
        {% endif -%}
        <div class="index-grid">
          {% for page in level2_pages -%}
            <div class="index-card">
              {% if config.mode == 'combined' -%}
                <h4>[[{{ page.title }}|{{ page.title | last_title_part }}]]</h4>
              {% else -%}
                <h3>[[{{ page.title }}|{{ page.title | last_title_part }}]]</h3>
              {% endif -%}
            </div>
          {% endfor -%}
        </div>
      {% endif -%}
    {% endfor -%}
  {% endif -%}
{% endif %}