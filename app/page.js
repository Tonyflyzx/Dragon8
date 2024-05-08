"use client";

import React, { useRef, useState, useEffect } from 'react';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const cubeContainers = document.querySelectorAll('.cube-container');
    const items = document.querySelectorAll('.item');
    const projectNames = ["clark", "bingo", "vertex", "linear"];

    function updateCubes(scrollY) {
      const yRotation = (scrollY / 2) % 360;
      const scrollOffset = scrollY * 0.25;

      cubeContainers.forEach((container, containerIndex) => {
        const cubes = container.querySelectorAll('.cube');

        cubes.forEach((cube, cubeIndex) => {
          let rotationDirection = cubeIndex % 2 === 0 ? 1 : -1;
          
          cube.style.transform = `translateZ(100px) rotateX(${yRotation * rotationDirection}deg)`;
        });

        // Optimized text position update
        const frontBackTextPosition = 50 + scrollOffset;
        const topBottomTextPosition = 50 - scrollOffset;

        container.querySelectorAll('.front p, .back p').forEach(p => {
          p.style.left = `${frontBackTextPosition}%`;
        });

        container.querySelectorAll('.top p, .bottom p').forEach(p => {
          p.style.left = `${topBottomTextPosition}%`;
        });
      });
    }

    function populateText() {
      items.forEach((item, itemIndex) => {
        const projectName = projectNames[itemIndex % projectNames.length];
        const sides = item.querySelectorAll('.side p');
        const textContent = Array(50).fill(projectName).join("&nbsp;&nbsp;&nbsp;&nbsp;");

        sides.forEach(side => {
          side.innerHTML = textContent;
        });
      });
    }

    populateText();
    updateCubes(window.scrollY);

    let ticking = false;
    document.addEventListener('scroll', function(e) {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateCubes(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    });

    return () => {
      document.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <div  className="projects-container">
      <div className="item project-1">
        <div className="cube-container">
          <div className="cube">
            <div className="side front">
              <p></p>
            </div>
            <div className="side back">
              <p></p>
            </div>
            <div className="side top">
              <p></p>
            </div>
            <div className="side bottom">
              <p></p>
            </div>
          </div>
          <div className="cube" style={{ left: '50%' }}>
            <div className="side front">
              <Image src="/images/IMG_9222.png" alt="" width={300} height={300} />
            </div>
            <div className="side back">
              <Image src="/images/IMG_9223.png" alt="" width={300} height={300} />
            </div>
            <div className="side top">
              <Image src="/images/IMG_9226.png" alt="" width={300} height={300} />
            </div>
            <div className="side bottom">
              <Image src="/images/IMG_9229.png" alt="" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
      <div className="item project-2">
        <div className="cube-container">
          <div className="cube">
            <div className="side front">
              <p></p>
            </div>
            <div className="side back">
              <p></p>
            </div>
            <div className="side top">
              <p></p>
            </div>
            <div className="side bottom">
              <p></p>
            </div>
          </div>
          <div className="cube" style={{ left: '50%' }}>
            <div className="side front">
              <Image src="/images/img5.png" alt="" width={300} height={300} />
            </div>
            <div className="side back">
              <Image src="/images/img6.png" alt="" width={300} height={300} />
            </div>
            <div className="side top">
              <Image src="/images/img7.png" alt="" width={300} height={300} />
            </div>
            <div className="side bottom">
              <Image src="/images/img8.png" alt="" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}