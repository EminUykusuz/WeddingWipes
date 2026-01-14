"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/31627141526?text=Merhaba%20Wedding%20Wipes%20hakkında%20bilgi%20almak%20istiyorum"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px 0 rgba(37, 211, 102, 0.5)',
        zIndex: 9999,
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 30px 0 rgba(37, 211, 102, 0.7)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 20px 0 rgba(37, 211, 102, 0.5)';
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0C7.164 0 0 7.164 0 16c0 2.813.726 5.448 2.001 7.74L.057 31.293l7.762-1.998A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0z"
          fill="#fff"
        />
        <path
          d="M25.303 22.504c-.337.948-1.995 1.741-3.264 1.97-.869.152-2.001.274-5.816-.996-4.88-1.624-8.04-6.616-8.284-6.922-.243-.305-1.978-2.63-1.978-5.018 0-2.388 1.251-3.562 1.694-4.048.442-.487 1.008-.609 1.344-.609.335 0 .67.002.964.018.31.015.726-.118 1.135.866.413 1.008 1.37 3.364 1.493 3.61.122.243.203.532.04.836-.162.305-.244.496-.487.766-.244.27-.512.602-.731.809-.244.243-.498.506-.214.994.284.487 1.263 2.083 2.713 3.375 1.865 1.66 3.434 2.178 3.92 2.422.486.244.768.203.1051-.122.284-.325 1.22-1.422 1.544-1.909.325-.487.65-.406 1.097-.244.447.163 2.835 1.336 3.321 1.58.487.244.812.366.934.568.122.203.122 1.17-.214 2.118z"
          fill="#25D366"
        />
      </svg>
    </a>
  );
}
