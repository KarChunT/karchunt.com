for file in public/gallery/images/*.webp; do
    mv "$file" "public/gallery/art-$(basename "$file")"
done