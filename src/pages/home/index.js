// import { Canvas } from '@react-three/fiber';

export default function Home() {
  return (
    <h1 style={headerFont} className="text-white">
      Jeff Delaney
      <style jsx global>
        {`
          :global(h1) {
            font-family: elevon, sans-serif;
            font-weight: 700;
            font-style: normal;
          }
        `}
      </style>
    </h1>
  );
}

const headerFont = {
  fontFamily: 'elevon, sans-serif',
  fontWeight: 700,
  fontStyle: 'normal',
};

const canvas = {
  background: '#000',
};
