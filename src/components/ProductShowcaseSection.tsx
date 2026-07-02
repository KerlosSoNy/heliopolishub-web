import { ShowcaseProduct } from "@/data/products";

interface Props {
  title: string;
  items: ShowcaseProduct[];
  chunkSize?: number;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function ProductShowcaseSection({ title, items, chunkSize = 4 }: Props) {
  const groups = chunk(items, chunkSize);

  return (
    <div className="product-showcase">
      <h2 className="title">{title}</h2>

      <div className="showcase-wrapper has-scrollbar">
        {groups.map((group, gi) => (
          <div className="showcase-container" key={gi}>
            {group.map((product) => (
              <div className="showcase" key={product.title + product.img}>
                <a href="#" className="showcase-img-box">
                  <img src={product.img} alt={product.alt} width={70} className="showcase-img" />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{product.title}</h4>
                  </a>

                  {product.category && (
                    <a href="#" className="showcase-category">
                      {product.category}
                    </a>
                  )}

                  <div className="price-box">
                    <p className="price">{product.price}</p>
                    {product.oldPrice && <del>{product.oldPrice}</del>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
