import Item from "./Item";

export default function Feed() {
  return (
    <div className="container mx-auto relative bg-gray-50 pb-2 lg:pt-8 lg:pb-28 ">
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-6 grid gap-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          <Item
            title="ALAIN MIKLI"
            desc="Embellished Square Sunglasses"
            price="65.00"
            img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          />
          <Item
            title="Super Sun"
            desc="Embellished Square Sunglasses"
            price="65.00"
            img="https://images.unsplash.com/photo-1563903530908-afdd155d057a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          />
          <Item
            title="Magic Bike"
            desc="Embellished Square Sunglasses"
            price="65.00"
            img="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2016&q=80"
          />
          <Item
            title="Super Perchero"
            desc="Embellished Square Sunglasses"
            price="65.00"
            img="https://images.unsplash.com/photo-1517502166878-35c93a0072f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          />
          <Item
            title="Watch Reloaded"
            desc="Embellished Square Sunglasses"
            price="65.00"
            img="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          />
          <Item
            title="Magic BAG"
            desc="Embellished Square Sunglasses"
            price="65.00"
            img="https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          />
          <Item
            title="Super Perchero"
            desc="Embellished Square Sunglasses"
            price="65.00"
            img="https://images.unsplash.com/photo-1517502166878-35c93a0072f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          />
          <Item
            title="Watch Reloaded"
            desc="Embellished Square Sunglasses"
            price="65.00"
            img="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          />
          <Item
            title="Magic BAG"
            desc="Embellished Square Sunglasses"
            price="65.00"
            img="https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          />
        </div>
      </div>
    </div>
  );
}
