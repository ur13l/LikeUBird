from PIL import Image
import sys

def is_between(original, check):
    return original - 60 <= check <= original + 60


if __name__ == "__main__":
    picture = Image.open(sys.argv[1]).convert('RGBA')
    r_i = 0xff
    g_i = 0xff
    b_i = 0xff

    width, height = picture.size

    for x in range(width):
        for y in range(height):
            (r,g,b,a) = picture.getpixel((x,y))
            if( is_between(r_i, r) and is_between(g_i, g) and is_between(b_i, b)):
                picture.putpixel( (x,y), (0x9f, 0x54, 0xc9))
                picture.save(sys.argv[1], 'PNG')