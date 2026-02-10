def lexicographic(a, b):
    ta = a.get('title', '').lower()
    tb = b.get('title', '').lower()
    return (ta > tb) - (ta < tb)
